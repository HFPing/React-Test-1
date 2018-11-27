import React, { PureComponent } from 'react';

import * as d3 from 'd3';

const styles = {
  root: {
    backgroundColor: "#C7D9D9",
  }
};

class Example7 extends PureComponent {
  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    const svgWidth = 600, svgHeight = 500;
    const svg = d3.select("#myChart")
      .append("svg")
      .attr("width", svgWidth)
      .attr("height", svgHeight)
      .attr("class", "svg-container")
        
    svg.append("line")
      .attr("x1", 100)
      .attr("x2", 500)
      .attr("y1", 50)
      .attr("y2", 50)
      .attr("stroke", "red");

    svg.append("rect")
      .attr("x", 100)
      .attr("y", 100)
      .attr("width", 200)
      .attr("height", 100)
      .attr("fill", "#9B95FF");

    svg.append("circle")
      .attr("cx", 200)
      .attr("cy", 300)
      .attr("r", 80)
      .attr("fill", "#7CE8D5");
  }

  render() {
    return (
      <div id="myChart" style={styles.root} />
    );
  }
}

export default Example7;
