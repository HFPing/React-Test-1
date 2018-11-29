import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import * as d3 from 'd3';

const data = [
	{
		"month": "January",
		"revenue": 13432,
		"profit": 8342
	},
	{
		"month": "February",
		"revenue": 19342,
		"profit": 10342
	},
	{
		"month": "March",
		"revenue": 17443,
		"profit": 15423
	},
	{
		"month": "April",
		"revenue": 26342,
		"profit": 18432
	},
	{
		"month": "May",
		"revenue": 34213,
		"profit": 29434
	},
	{
		"month": "June",
		"revenue": 50321,
		"profit": 45343
	},
	{
		"month": "July",
		"revenue": 54273,
		"profit": 47452
	}
];

const margin = { left:80, right:20, top:50, bottom:100 };

const width = 600 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

let g,
    x,
    y,
    xAxisGroup,
    yAxisGroup,
    flag = false,
    yLabel,
    t = d3.transition().duration(750),
    newData;

class Barchart extends PureComponent {
  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    g = d3.select("#myChart")
      .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

    xAxisGroup = g.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height +")");

    yAxisGroup = g.append("g")
      .attr("class", "y axis");

    // X Scale
    x = d3.scaleBand()
      .range([0, width])
      .padding(0.2);

    // Y Scale
    y = d3.scaleLinear()
      .range([height, 0]);

    // X Label
    g.append("text")
      .attr("y", height + 50)
      .attr("x", width / 2)
      .attr("font-size", "20px")
      .attr("text-anchor", "middle")
      .text("Month");

    // Y Label
    yLabel = g.append("text")
      .attr("y", -60)
      .attr("x", -(height / 2))
      .attr("font-size", "20px")
      .attr("text-anchor", "middle")
      .attr("transform", "rotate(-90)")
      .text("Revenue");

    d3.interval(() => {
      newData = flag ? data : data.slice(1);
      flag = !flag;
      this.update(newData);
    }, 1000);

    // Run for the first time
    this.update(data);
  }

  update (myData) {
    const dataSrc = flag ? "revenue" : "profit";

    x.domain(myData.map((d) => d.month));
    y.domain([0, d3.max(myData,(d) => d[dataSrc])]);

    // X Axis
    const xAxisCall = d3.axisBottom(x);
    xAxisGroup.transition(t).call(xAxisCall);
    
    // Y Axis
    const yAxisCall = d3.axisLeft(y)
      .tickFormat((d) => "$" + d);
    yAxisGroup.transition(t).call(yAxisCall);

    // Join new data with old elements
    const rects = g.selectAll("rect")
      // Match the column data with a spacial key, insted of the array index
      .data(myData, (d) => d.month);

    // Exit old elements not present in new data
    rects.exit()
        .attr('fill', 'red')
      .transition(t)
        .attr("y", y(0))
        .attr("height", 0)
        .remove();

    // Update old elements present in new data
    rects.transition(t)
      .attr("y", (d) => y(d[dataSrc]))
      .attr("x", (d) => x(d.month))
      .attr("height", (d) => height - y(d[dataSrc]))
      .attr("width", x.bandwidth);

    // Enter new elements present in new data
    rects.enter()
      .append("rect")
        .attr("x", (d) => x(d.month))
        .attr("y", y(0))
        .attr("height", 0)
        .attr("width", x.bandwidth)
        .attr("fill", "grey")
      .transition(t)
        .attr("y", (d) => y(d[dataSrc]))
        .attr("height", (d) => height - y(d[dataSrc]));

    yLabel.text(flag ? 'Revenue' : 'Profit');
  }

  render () {
    return <div id="myChart" />;
  };
}

Barchart.propTypes = {

};

Barchart.defaultProps = {

};

export default Barchart;
