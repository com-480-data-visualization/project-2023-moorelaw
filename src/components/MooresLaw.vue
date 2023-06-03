<template>
  <div class="section flex text-center">
    <h1>Moore's Law</h1>
    <!-- svg id="sub_svg"></svg -->
    <!-- <img src="/figure/cpu-trend.svg" class="w-4/5"> -->
    <div id="mooreslaw_svg"></div>
    <!-- <p class="">TODO: Repaint this figure with d3.js. </p> -->
  </div>
</template>

<style>
.legend {
  font-family: Arial, Helvetica, sans-serif;
}

.tooltip {
  position: absolute;
  pointer-events: none;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 8px;
  border-radius: 4px;
  font-family: Arial, sans-serif;
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
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  // add texts and lines for different stages
  svg.append("text").style("font-size", "23px").attr("x", 150).attr("y", 730).text("stage 1")
  svg.append("text").style("font-size", "23px").attr("x", 694).attr("y", 730).text("stage 2")
  svg.append("text").style("font-size", "23px").attr("x", 1250).attr("y", 730).text("stage 3")
  svg.append("text").style("font-size", "23px").attr("x", 1550).attr("y", 730).text("stage 4")
  
  svg.append("line").style('stroke', 'red').style('stroke-width', '1px').style('stroke-dasharray', '3 3')
                    .attr("x1", 300).attr("y1", 0)
                    .attr("x2", 300).attr("y1", height)
  svg.append("line").style('stroke', 'red').style('stroke-width', '1px').style('stroke-dasharray', '3 3')
                    .attr("x1", 1088).attr("y1", 0)
                    .attr("x2", 1088).attr("y1", height)
  svg.append("line").style('stroke', 'red').style('stroke-width', '1px').style('stroke-dasharray', '3 3')
                    .attr("x1", 1500).attr("y1", 0)
                    .attr("x2", 1500).attr("y1", height)

  const yTickValues = [10 ** 1, 10 ** 3, 10 ** 5, 10 ** 7];
  const dotSize = 5
  const dotSizeEnlarge = 8

  //Read the data
  d3.csv("/public/cpu_trend.csv").then(function (data) {
    // remove the first row
    data.forEach(function (d) {
      d.year = +d.year;
      d.value = +d.value;
    });

    let hoverLine = svg.append('line')
      .attr('class', 'hover-line')
      .style('stroke', 'black')
      .style('stroke-width', '1px')
      .style('stroke-dasharray', '3 3')
      .style('opacity', 0)
      .attr('y1', 0)
      .attr('y2', height);


    let tooltip = d3.select("#mooreslaw_svg")
      .append("div")
      .attr("class", "tooltip")

    let showTooltip = function (d) {
      // <img src="./image.png" alt="Image" style="width: 100px;">
      const htmlContent = `
            <div>
                <p>cpu year: ${Math.floor(d3.select(d.target).attr("data-year"))}</p>
                <p>${d3.select(d.target).attr("data-type")} value: ${(Math.round(d3.select(d.target).attr("data-value") * 100) / 100).toFixed(2)}</p>
            </div>
        `;

      const parent_pos = document.getElementById("mooreslaw_svg").getBoundingClientRect();

      tooltip
        .transition()
        .duration(200)
      
      tooltip
        .style("opacity", 1)
        .html(htmlContent)
        .style("left", (d.clientX - parent_pos.left + "px"))
        .style("top", (d.clientY - parent_pos.top + "px"));
        // .style("top", ((d.pageY - 10) + "px"));

      hoverLine.style('opacity', 1);

      // make the dots larger when hovered on
      d3.select(d.target)
        .transition()
        .duration(200)
        .attr('r', dotSizeEnlarge)
        .attr('stroke', "black");
    }

    let moveTooltip = function (d) {
      // tooltip
      // .style("left", (d.pageX+30) + "px")
      // .style("top", (d.pageY+30) + "px");

      // const parent_pos = svg.node().getBoundingClientRect();

      hoverLine.attr('x1', d.clientX - 315)
        .attr('x2', d.clientX - 315);
    }

    let hideTooltip = function (d) {
      tooltip
        .style("opacity", 0);

      hoverLine.style('opacity', 0);

      d3.select(d.target)
        .transition()
        .duration(200)
        .attr('r', dotSize);
        // .attr('stroke', "none");
    }


    let types = new Set(["Number of Logical Cores", "Frequency (MHz)",
      "Transistors (thousands)", "Typical Power (Watts)",
      "Single-Thread Performance (SpecINT * 10 ^3)"]);

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
      .attr("data-value", function (d) { return d.value; })
      .attr("data-type", function (d) { return d.type; })
      .attr("fill", function (d) { return colorScale(d.type); })
      .attr('stroke', "black")
      .on("mouseover", showTooltip)
      .on("mousemove", moveTooltip)
      .on("mouseleave", hideTooltip);

    // Add the x-axis
    svg.append("g")
      .attr("class", "axis")
      .style("font-size", "15px")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(xScale).tickSize(15));

    // Add the y-axis
    svg.append("g")
      .attr("class", "axis")
      .style("font-size", "15px")
      .call(d3.axisLeft(yScale).tickValues(yTickValues).tickSize(15));

    // Got hint from https://stackoverflow.com/questions/41090920/how-to-position-the-legend-in-a-d3-chart
    let legend = svg.selectAll(".legend")
      .data(types)
      .enter()
      .append("g")
      .style("font-size", "20px")
      .attr("class", "legend")
      .attr("transform", function (d, i) { return "translate(-400," + i * 20 + ")"; });

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

    // Add the axis labels
    svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x", 0 - (height / 2))
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .style("font-size", "20px")
      .text("Value");

    svg.append("text")
      .attr("x", (width / 2))
      .attr("y", height + margin.bottom)
      .style("font-size", "20px")
      .attr("text-anchor", "middle")
      .text("Year");

  })
});

</script>