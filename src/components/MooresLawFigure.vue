<template>
  <div class="section">
    <div class="slide flex">
      <h2 class="mb-10">50-Year Trend of CPU Design</h2>
      <div id="mooreslaw_svg" class="h-150">
        <svg></svg>
        <div class="tooltip"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tooltip {
  position: absolute;
  pointer-events: none;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 8px;
  border-radius: 4px;
  font-size: 12px;
  line-height: 1.4;
  text-align: center;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
}
</style>

<script setup>

import * as d3 from "d3";
import { onMounted } from "vue";

onMounted(() => {
  // set the dimensions and margins of the graph
  const margin = { top: 10, right: 30, bottom: 30, left: 60 },
    width = 1800 - margin.left - margin.right,
    height = 800 - margin.top - margin.bottom;

  // append the svg object to the body of the page
  const svg = d3.select("#mooreslaw_svg")
    .selectChild("svg")
    .attr("width", "auto")
    .attr("height", "100%")
    .attr("viewBox", [0, 0, width + margin.left + margin.right, height + margin.top + margin.bottom])
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  // add texts and lines for different stages
  svg.append("line").style('stroke', 'salmon').style('stroke-width', '1px').style('stroke-dasharray', '3 3')
    .attr("x1", 1083).attr("y1", 0)
    .attr("x2", 1083).attr("y1", height)
  svg.append("line").style('stroke', 'salmon').style('stroke-width', '1px').style('stroke-dasharray', '3 3')
    .attr("x1", 1400).attr("y1", 0)
    .attr("x2", 1400).attr("y1", height)

  svg.append("text").attr("x", 1100).attr("y", height - 40).attr("fill", "#0076db").attr("font-size", "1.5rem").text("Multicore Era")
  svg.append("text").attr("x", 1420).attr("y", height - 40).attr("fill", "#0076db").attr("font-size", "1.5rem").text("Specialization Era")

  const yTickValues = [10 ** 1, 10 ** 3, 10 ** 5, 10 ** 7];
  const dotSize = 5
  const dotSizeEnlarge = 8

  //Read the data
  d3.csv("/cpu_trend.csv").then(function (data) {
    // remove the first row
    data.forEach(function (d) {
      d.year = +d.year;
      d.value = +d.value;
    });

    let rational_data = new Map();

    data.forEach((d) => {
      if (!rational_data.has(d.year)) {
        rational_data.set(d.year, new Map());
      }
      rational_data.get(d.year).set(d.type, d.value);
    });

    console.log(rational_data);

    let hoverLine = svg.append('line')
      .attr('class', 'hover-line')
      .style('stroke', 'black')
      .style('stroke-width', '1px')
      .style('stroke-dasharray', '3 3')
      .style('opacity', 0)
      .attr('y1', 0)
      .attr('y2', height);


    let tooltip = d3.select("#mooreslaw_svg")
      .selectChild("div")

    let showTooltip = function (d) {
      // <img src="./image.png" alt="Image" style="width: 100px;">
      let current_year = d3.select(d.target).attr("data-year");
      let html_contents = [];
      html_contents.push(`Year: ${Math.floor(current_year)}`);

      console.log(current_year);
      console.log(rational_data);

      let current_data = rational_data.get(parseFloat(current_year));

      if (current_data) {
        if (current_data.has("transistors")) {
          html_contents.push(`Transistor count: ${Math.floor(current_data.get("transistors") / 1000)}K`);
        }
        if (current_data.has("frequency")) {
          html_contents.push(`Frequency: ${Math.floor(current_data.get("frequency"))}MHz`);
        }
        if (current_data.has("cores")) {
          html_contents.push(`Core count: ${current_data.get("cores")}`);
        }
        if (current_data.has("specint")) {
          html_contents.push(`SPECint Score (Performance): ${Math.floor(current_data.get("specint"))}`);
        }
      }

      const htmlContent = `
            <div class="text-justify">
              ${html_contents.map((t) => `<p>${t}</p>`).join("\n")}
            </div>
        `;

      const parent_pos = document.getElementById("mooreslaw_svg").getBoundingClientRect();

      tooltip
        .style("opacity", 1)
        .html(htmlContent)
        .style("left", (d.clientX - parent_pos.left + "px"))
        .style("top", (d.clientY - parent_pos.top + "px"));
      // .style("top", ((d.pageY - 10) + "px"));

      hoverLine.style('opacity', 1);
      hoverLine.attr('x1', d3.select(d.target).attr("cx"))
        .attr('x2', d3.select(d.target).attr("cx"));

      // make the dots larger when hovered on
      d3.select(d.target)
        .transition()
        .duration(200)
        .attr('r', dotSizeEnlarge)
        .attr('stroke', "black");
    }

    let hideTooltip = function (d) {
      tooltip.style("opacity", 0);
      hoverLine.style('opacity', 0);

      d3.select(d.target)
        .transition()
        .duration(200)
        .attr('r', dotSize);
      // .attr('stroke', "none");
    }


    let types = new Set(["Number of Logical Cores", "Frequency (MHz)",
      "Transistors (thousands)", "Typical Power (Watts)",
      "Single-Thread Performance"]);

    // using a set of color that is easy to distinguish for color-blind group
    let colorScale = d3.scaleOrdinal()
      .domain(types)
      .range(['#0072B2', '#E69F00', '#009E73', '#CC79A7', '#D55E00']);

    let xScale = d3.scaleLinear()
      .domain(d3.extent(data, function (d) { return d.year; })).nice()
      .range([0, width]);

    let yScale = d3.scaleLog()
      .domain([1 / 10, d3.max(data, function (d) { return d.value; })]).nice()
      .range([height, 0])
      .base(10);

    // Create the scatter plot points
    svg.selectAll(".dot")
      .data(data)
      .enter().append("circle")
      .attr("class", "dot")
      .attr("r", dotSize)
      .attr("cx", function (d) { return xScale(d.year); })
      .attr("cy", function (d) { return yScale(d.value); })
      .attr("data-year", function (d) { return d.year; })
      .attr("fill", function (d) { return colorScale(d.type); })
      .attr('stroke', "black")
      .on("mouseover", showTooltip)
      .on("mouseleave", hideTooltip);

    // Add the x-axis
    svg.append("g")
      .attr("class", "axis")
      .style("font-size", "1.5rem")
      .attr("transform", "translate(0," + (height - 15) + ")")
      .call(d3.axisBottom(xScale).tickSize(4).tickFormat(d3.format("d")));

    // Add the y-axis
    svg.append("g")
      .attr("class", "axis")
      .style("font-size", "1.5rem")
      .attr("transform", `translate(${0}, ${-15})`)
      .call(d3.axisLeft(yScale).tickValues(yTickValues).tickSize(4));

    // Got hint from https://stackoverflow.com/questions/41090920/how-to-position-the-legend-in-a-d3-chart
    let legend = svg.selectAll(".legend")
      .data(types)
      .enter()
      .append("g")
      .style("font-size", "1.5rem")
      .attr("class", "legend")
      .attr("transform", function (d, i) { return "translate(-400," + i * 35 + ")"; });

    // Add a colored circle to the legend
    legend.append("circle")
      .attr("cx", 470)
      .attr("cy", 10)
      .attr("r", 5)
      .style("fill", function (d) { return colorScale(d); });

    // Add the name of the type to the legend
    legend.append("text")
      .attr("x", 480)
      .attr("y", 10)
      .attr("dy", ".35em")
      .style("text-anchor", "start")
      .text(function (d) { return d; });

    svg.append("text")
      .attr("x", (width))
      .attr("y", height - margin.bottom)
      .style("font-size", "2rem")
      .attr("text-anchor", "middle")
      .text("Year");

  })
});

</script>