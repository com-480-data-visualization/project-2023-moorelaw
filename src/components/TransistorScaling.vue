<template>
  <h2 class="mb-10">Transistor Scaling</h2>

  <div class="text-justify mx-50">
    <p class="my-4">MOSFET's performance gets better as the semiconductor technology advance: Better technology means
      smaller transistors size, thus: </p>

    <ul class="my-4">
      <li>Shorter distance between source and drain, meaning the signal propagation takes less time.</li>
      <li>Smaller gate capacitance, meaning lower power consumption when switching gate voltages.</li>
      <li>More transistors per unit area.</li>
    </ul>

    <p class="my-4">
      These rules are also famous as <a href="https://en.wikipedia.org/wiki/Dennard_scaling">Dennard scaling</a>.
    </p>
  </div>

  <div class="flex flex-justify-center mb-0">
    <label class="mx-5"><input type="radio" v-model="selected_value" checked value="dt"> Delay Trend </label>
    <label class="mx-5"><input type="radio" v-model="selected_value" value="pt"> Power Trend</label>
    <label class="mx-5"><input type="radio" v-model="selected_value" value="at"> Area Trend </label>
  </div>

  <div id="scaling_svg_figure" class="w-300 mx-auto"></div>
</template>

<script setup>

import * as d3 from "d3";
import { onMounted, ref, watch } from "vue";


const selected_value = ref("dt");

// Copyright 2021 Observable, Inc.
// Released under the ISC license.
// https://observablehq.com/@d3/connected-scatterplot
function ConnectedScatterplot(data, {
  x = ([x]) => x, // given d in data, returns the (quantitative) x-value
  y = ([, y]) => y, // given d in data, returns the (quantitative) y-value
  r = 3, // (fixed) radius of dots, in pixels
  title, // given d in data, returns the label
  orient = () => "right", // given d in data, returns a label orientation (top, right, bottom, left)
  defined, // for gaps in data
  curve = d3.curveCatmullRom, // curve generator for the line
  width = 600, // outer width, in pixels
  height = 400, // outer height, in pixels
  marginTop = 50, // top margin, in pixels
  marginRight = 40, // right margin, in pixels
  marginBottom = 60, // bottom margin, in pixels
  marginLeft = 30, // left margin, in pixels
  inset = r * 2, // inset the default range, in pixels
  insetTop = inset, // inset the default y-range
  insetRight = inset, // inset the default x-range
  insetBottom = inset, // inset the default y-range
  insetLeft = inset, // inset the default x-range
  xType = d3.scaleLinear, // type of x-scale
  xDomain, // [xmin, xmax]
  xRange = [marginLeft + insetLeft, width - marginRight - insetRight], // [left, right]
  xFormat, // a format specifier string for the x-axis
  xLabel, // a label for the x-axis
  yType = d3.scaleLinear, // type of y-scale
  yDomain, // [ymin, ymax]
  yRange = [height - marginBottom - insetBottom, marginTop + insetTop], // [bottom, top]
  yFormat, // a format specifier string for the y-axis
  yLabel, // a label for the y-axis
  fill = "white", // fill color of dots
  stroke = "currentColor", // stroke color of line and dots
  strokeWidth = 2, // stroke width of line and dots
  strokeLinecap = "round", // stroke line cap of line
  strokeLinejoin = "round", // stroke line join of line
  halo = "#fff", // halo color for the labels
  haloWidth = 6, // halo width for the labels
  duration = 0 // intro animation in milliseconds (0 to disable)
} = {}) {
  // Compute values.
  const X = d3.map(data, x);
  const Y = d3.map(data, y);
  const T = title == null ? null : d3.map(data, title);
  const O = d3.map(data, orient);
  const I = d3.range(X.length);
  if (defined === undefined) defined = (d, i) => !isNaN(X[i]) && !isNaN(Y[i]);
  const D = d3.map(data, defined);

  // Compute default domains.
  if (xDomain === undefined) xDomain = d3.nice(...d3.extent(X), width / 80);
  if (yDomain === undefined) yDomain = d3.nice(...d3.extent(Y), height / 50);

  // Construct scales and axes.
  const xScale = xType(xDomain, xRange);
  const yScale = yType(yDomain, yRange);
  const xAxis = d3.axisBottom(xScale).ticks(width / 80, xFormat).tickFormat(d3.format("d"));
  const yAxis = d3.axisLeft(yScale).ticks(height / 50, yFormat);

  // Construct the line generator.
  const line = d3.line()
    .curve(curve)
    .defined(i => D[i])
    .x(i => xScale(X[i]))
    .y(i => yScale(Y[i]));

  const svg = d3.create("svg")
    .attr("viewBox", [0, 0, width, height])
    .style("weight", "100%")
    .style("height", "100%");

  svg.append("g")
    .attr("transform", `translate(0,${height - marginBottom})`)
    .style("font-size", "1.15rem")
    .call(xAxis)
    .call(g => g.select(".domain").remove())
    .call(g => g.selectAll(".tick line").clone()
      .attr("y2", marginTop + marginBottom - height)
      .attr("stroke-opacity", 0.1))
    .call(g => g.append("text")
      .attr("x", width - marginRight)
      .attr("y", marginBottom - 10)
      .attr("fill", "currentColor")
      .attr("text-anchor", "middle")
      .text(xLabel));

  svg.append("g")
    .attr("transform", `translate(${marginLeft},0)`)
    .style("font-size", "1.15rem")
    .call(yAxis)
    .call(g => g.select(".domain").remove())
    .call(g => g.selectAll(".tick line").clone()
      .attr("x2", width - marginLeft - marginRight)
      .attr("stroke-opacity", 0.1))
    .call(g => g.append("text")
      .style("font-size", "1.15rem")
      .attr("x", -marginLeft)
      .attr("y", marginTop - 10)
      .attr("fill", "currentColor")
      .attr("text-anchor", "start")
      .text(yLabel));

  const path = svg.append("path")
    .attr("fill", "none")
    .attr("stroke", stroke)
    .attr("stroke-width", strokeWidth)
    .attr("stroke-linejoin", strokeLinejoin)
    .attr("stroke-linecap", strokeLinecap)
    .attr("d", line(I));

  svg.append("g")
    .attr("fill", fill)
    .attr("stroke", stroke)
    .attr("stroke-width", strokeWidth)
    .selectAll("circle")
    .data(I.filter(i => D[i]))
    .join("circle")
    .attr("cx", i => xScale(X[i]))
    .attr("cy", i => yScale(Y[i]))
    .attr("r", r);

  const label = svg.append("g")
    .attr("font-family", "sans-serif")
    .attr("font-size", "1.15rem")
    .attr("stroke-linejoin", "round")
    .selectAll("g")
    .data(I.filter(i => D[i]))
    .join("g")
    .attr("transform", i => `translate(${xScale(X[i])},${yScale(Y[i])})`);

  if (T) label.append("text")
    .text(i => T[i])
    .each(function (i) {
      const t = d3.select(this);
      switch (O[i]) {
        case "bottom": t.attr("text-anchor", "middle").attr("dy", "1.4em"); break;
        case "left": t.attr("dx", "-0.5em").attr("dy", "0.32em").attr("text-anchor", "end"); break;
        case "right": t.attr("dx", "0.5em").attr("dy", "0.32em").attr("text-anchor", "start"); break;
        default: t.attr("text-anchor", "middle").attr("dy", "-0.7em"); break;
      }
    })
    .call(text => text.clone(true))
    .attr("fill", "none")
    .attr("stroke", halo)
    .attr("stroke-width", haloWidth);

  // Measure the length of the given SVG path string.
  function length(path) {
    return d3.create("svg:path").attr("d", path).node().getTotalLength();
  }

  function animate() {
    if (duration > 0) {
      const l = length(line(I));

      path
        .interrupt()
        .attr("stroke-dasharray", `0,${l}`)
        .transition()
        .duration(duration)
        .ease(d3.easeLinear)
        .attr("stroke-dasharray", `${l},${l}`);

      label
        .interrupt()
        .attr("opacity", 0)
        .transition()
        .delay(i => length(line(I.filter(j => j <= i))) / l * (duration - 125))
        .attr("opacity", 1);
    }
  }

  return Object.assign(svg.node(), { animate });
}

onMounted(() => {
  d3.csv("/technology.csv").then(function (data) {
    data.forEach(function (d) {
      d.year = +d.year;
      d.feature = +d['feature(nm)'] + "nm";
      d.delay = +d['delay(ps)'];
      d.power = +d['power(uW)'];
      d.area = +d['area(um^2)'];
    });

    let svgDelay = ConnectedScatterplot(data, {
      x: d => d.year,
      y: d => d.delay,
      title: d => d.feature,
      duration: 500,
      xLabel: "Year",
      yLabel: "Delay(ps)",
      width: 1200
    })

    let svgPower = ConnectedScatterplot(data, {
      x: d => d.year,
      y: d => d.power,
      title: d => d.feature,
      duration: 500,
      xLabel: "Year",
      yLabel: "Power(uW)",
      width: 1200
    })

    let svgArea = ConnectedScatterplot(data, {
      x: d => d.year,
      y: d => d.area,
      title: d => d.feature,
      duration: 500,
      xLabel: "Year",
      yLabel: "Area(um^2)",
      width: 1200

    })

    watch(() => selected_value, (new_value, old_value) => {
      let figure_node = document.getElementById("scaling_svg_figure");
      for (const cl of figure_node.childNodes) {
        figure_node.removeChild(cl);
      }
      if (new_value.value == "dt") {
        figure_node.append(svgDelay);
        svgDelay.animate();
      } else if (new_value.value == "pt") {
        figure_node.append(svgPower);
        svgPower.animate();
      } else {
        figure_node.append(svgArea);
        svgArea.animate();
      }
    }, { immediate: true, deep: true })
  });


});

</script>
