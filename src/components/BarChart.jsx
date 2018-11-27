import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import * as d3 from 'd3';

const data = [
  {
    name: 'Mio 1',
    height: 828,
  },
  {
    name: 'Mio 2',
    height: 623,
  },
  {
    name: 'Mio 3',
    height: 601,
  },
  {
    name: 'Mio 4',
    height: 599,
  },
  {
    name: 'Mio 5',
    height: 544.5,
  },
  {
    name: 'Mio 6',
    height: 144.5,
  },
];

class Barchart extends PureComponent {
  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    const nameDomain = data.map(val => val.name);

    const svg = d3.select('#myChart')
      .append('svg')
      .attr('width', '400')
      .attr('height', '400')
      .attr('fill', 'blue');

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, (d) => d.height)])
      .range([0, 400]);

    const x = d3.scaleBand()
      .domain(nameDomain)
      .range([0, 400])
      .paddingInner(0.3)
      .paddingOuter(0.3);

    const rects = svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('y', 20)
      .attr('x', (d, i) => x(d.name))
      .attr('width', 40)
      .attr('height', (d) => y(d.height))
      .attr('fill', (d) => 'grey');
  }

  render = () => <div id="myChart" style={{ backgroundColor: 'LightSeaGreen', width: 400 }} />;
}

export default Barchart;
