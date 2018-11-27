import React, { PureComponent } from 'react';
//import chroma from 'chroma-js';

import * as d3 from 'd3';

const w = 650;
const h = 400;
//const colors = chroma.scale([blue, red, green]);

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
