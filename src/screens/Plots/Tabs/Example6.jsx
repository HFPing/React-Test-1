import React, { PureComponent } from 'react';

import * as d3 from 'd3';

const styles = {
  root: {
    backgroundColor: "#C7D9D9",
    width: "500",
    height: "800",
  }
};

class Example6 extends PureComponent {
  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    const data= [80, 100, 56, 120, 180, 30, 40, 120, 160];

    const svgWidth = 500, svgHeight = 300;
    
    const svg = d3.select('#myChart')
      .append("svg")
      .attr("width", svgWidth)
      .attr("height", svgHeight);
    
      const xScale = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([0, svgWidth]);
             
      const yScale = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([svgHeight, 0]);
         
      const x_axis = d3.axisBottom().scale(xScale);
    
      const y_axis = d3.axisLeft().scale(yScale);
             
    svg.append("g")
      .attr("transform", "translate(50, 10)")
      .call(y_axis);
             
      const xAxisTranslate = svgHeight - 20;
             
    svg.append("g")
      .attr("transform", "translate(50, " + xAxisTranslate  +")")
      .call(x_axis);
  }

  render() {
    return (
      <div id="myChart" style={styles.root} />
    );
  }
}

export default Example6;
