import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import * as d3 from 'd3';

const styles = {
  root: {
    backgroundColor: "#C7D9D9",
    width: "500",
    height: "800",
  }
};

class Example4 extends PureComponent {
  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    const dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];
    const svgWidth = 500, svgHeight = 300, barPadding = 5;
    const barWidth = svgWidth / dataset.length;
    const svg = d3.select('#myChart')
      .append('svg')
      .attr("width", svgWidth)
      .attr("height", svgHeight);
        
    svg.selectAll("rect")
      .data(dataset)
      .enter()
      .append("rect")
      .attr("y", function(d) {
          return svgHeight - d 
      })
      .attr("height", function(d) { 
          return d; 
      })
      .attr("width", barWidth - barPadding)
      .attr("class", "bar")
      .attr("transform", function (d, i) {
          var translate = [barWidth * i, 0]; 
          return "translate("+ translate +")";
      });

    svg.selectAll("text")
      .data(dataset)
      .enter()
      .append("text")
      .text(function(d) {
          return d;
      })
      .attr("y", function(d, i) {
          return svgHeight - d - 2;
      })
      .attr("x", function(d, i) {
          return barWidth * i;
      })
      .attr("fill", "#A64C38");
  }

  render() {
    return (
      <div id="myChart" style={styles.root} />
    );
  }
}

export default Example4;
