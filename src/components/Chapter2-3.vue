<template>
    <h1>Transistor Scaling Trend</h1>
    <!-- <img src="/figure/cmos_scaling.svg" class="my-10 mb-30"> -->
    <div id="delay_svg"></div>
</template>

<style>
.connected-svg {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18;
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

// Copyright 2021 Observable, Inc.
// Released under the ISC license.
// https://observablehq.com/@d3/connected-scatterplot
function ConnectedScatterplot(data, {
  x = ([x]) => x, // given d in data, returns the (quantitative) x-value
  y = ([, y]) => y, // given d in data, returns the (quantitative) y-value
  r = 3, // (fixed) radius of dots, in pixels
  title, // given d in data, returns the label
  orient = () => "top", // given d in data, returns a label orientation (top, right, bottom, left)
  defined, // for gaps in data
  curve = d3.curveCatmullRom, // curve generator for the line
  width = 600, // outer width, in pixels
  height = 400, // outer height, in pixels
  marginTop = 20, // top margin, in pixels
  marginRight = 20, // right margin, in pixels
  marginBottom = 30, // bottom margin, in pixels
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
  const xAxis = d3.axisBottom(xScale).ticks(width / 80, xFormat);
  const yAxis = d3.axisLeft(yScale).ticks(height / 50, yFormat);

  // Construct the line generator.
  const line = d3.line()
      .curve(curve)
      .defined(i => D[i])
      .x(i => xScale(X[i]))
      .y(i => yScale(Y[i]));

  const svg = d3.create("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

  svg.append("g")
      .attr("transform", `translate(0,${height - marginBottom})`)
      .style("font-size", "15px")
      .call(xAxis)
      .call(g => g.select(".domain").remove())
      .call(g => g.selectAll(".tick line").clone()
          .attr("y2", marginTop + marginBottom - height)
          .attr("stroke-opacity", 0.1))
      .call(g => g.append("text")
          .attr("x", 200)
          .attr("y", marginBottom)
          .attr("fill", "currentColor")
          .attr("text-anchor", "middle")
          .text(xLabel));

  svg.append("g")
      .attr("transform", `translate(${marginLeft},0)`)
      .style("font-size", "14px")
      .call(yAxis)
      .call(g => g.select(".domain").remove())
      .call(g => g.selectAll(".tick line").clone()
          .attr("x2", width - marginLeft - marginRight)
          .attr("stroke-opacity", 0.1))
      .call(g => g.append("text")
          .style("font-size", "15px")
          .attr("x", -marginLeft)
          .attr("y", 10)
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
      .attr("font-size", 14)
      .attr("stroke-linejoin", "round")
    .selectAll("g")
    .data(I.filter(i => D[i]))
    .join("g")
      .attr("transform", i => `translate(${xScale(X[i])},${yScale(Y[i])})`);

  if (T) label.append("text")
      .text(i => T[i])
      .each(function(i) {
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

  animate();

  return Object.assign(svg.node(), {animate});
}

onMounted(() => {

    // set the dimensions and margins of the graph
    const margin = { top: 10, right: 30, bottom: 30, left: 60 },
    width = 700 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

    const container = document.getElementById('delay_svg');

    d3.csv("/public/technology.csv").then(function (data) {
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
            duration: 10000,
            xLabel: "year",
            yLabel: "delay(ps)"
        })

        let svgPower = ConnectedScatterplot(data, {
            x: d => d.year,
            y: d => d.power,
            title: d => d.feature,
            duration: 10000,
            xLabel: "year",
            yLabel: "power(uW)"
        })

        let svgArea = ConnectedScatterplot(data, {
            x: d => d.year,
            y: d => d.area,
            title: d => d.feature,
            duration: 10000,
            xLabel: "year",
            yLabel: "area(um^2)"
        })
        
        document.addEventListener('DOMContentLoaded', () => {
            svgDelay.animate();
        });
        container.appendChild(svgDelay);
        container.appendChild(svgPower);
        container.appendChild(svgArea);
    })

    
});

</script>
