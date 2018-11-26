import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import chroma from 'chroma-js';

import * as d3 from 'd3';

const styles = {
  root: {
    backgroundColor: "#C7D9D9",
    width: "500",
    height: "800",
  }
};

const w = 650;
const h = 400;
const margin = { top: 20, right: 5, bottom: 20, left: 35 };
const red = '#eb6a5b';
const green = '#b6e86f';
const blue = '#52b6ca';
const colors = chroma.scale([blue, red, green]);
const dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];
const barPadding = 5;
var barWidth = (2 / dataset.length);

class Example2 extends PureComponent {
  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    const data = [12, 5, 6, 6, 9, 10];
    
    const svg = d3.select("#myChart")
    .append("svg")
    .attr("width", w)
    .attr("height", h)
    .style("margin-left", 100);
                  
    svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => h - 10 * d)
      .attr("width", 65)
      .attr("height", (d, i) => d * 10)
      .attr("fill", "green")
    
    svg.selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text((d) => d)
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => h - (10 * d) - 3)
  }

  render() {
    return (
      <div id="myChart" />
    );
  }
}

export default Example2;
