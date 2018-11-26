import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import * as d3 from 'd3';

const styles = {
  root: {
    backgroundColor: "#C7D9D9",
  }
};

class Example5 extends PureComponent {
  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    const dataset = [1, 2, 3, 4, 5];

    const svgWidth = 500, svgHeight = 300, barPadding = 5;
    const barWidth = (svgWidth / dataset.length);
    
    
    const svg = d3.select('#myChart')
      .append("svg")
      .attr("width", svgWidth)
      .attr("height", svgHeight);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(dataset)])
      .range([0, svgHeight]);
        
    svg.selectAll("rect")
      .data(dataset)
      .enter()
      .append("rect")
      .attr("y", function(d) {
           return svgHeight - yScale(d) 
      })
      .attr("height", function(d) { 
          return yScale(d); 
      })
      .attr("width", barWidth - barPadding)
      .attr("transform", function (d, i) {
          var translate = [barWidth * i, 0]; 
          return "translate("+ translate +")";
      });
  }

  render() {
    return (
      <div id="myChart" style={styles.root} />
    );
  }
}

export default Example5;
