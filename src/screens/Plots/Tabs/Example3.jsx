import React, { PureComponent } from 'react';

import * as d3 from 'd3';

const styles = {
  root: {
    backgroundColor: "#C7D9D9",
  }
};

class Example3 extends PureComponent {
  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    const dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];

    const w = 500, h = 300, barPadding = 5;
    const barWidth = (w / dataset.length);


    const svg = d3.select('#myChart')
      .append("svg")
      .attr("width", w)
      .attr("height", h);
        
    svg.selectAll("rect")
      .data(dataset)
      .enter()
      .append("rect")
      .attr("y", function(d) {
          return h - d 
      })
      .attr("height", function(d) { 
          return d; 
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

export default Example3;
