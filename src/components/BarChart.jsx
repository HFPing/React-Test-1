import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import * as d3 from 'd3';

import './BarChart.css';

class Barchart extends PureComponent {
  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    // Props aquire
    const {
      style,
      paddingInner,
      paddingOuter,
      data,
      xLabel,
      yLabel,
    } = this.props;
    const {
      width,
      height,
      padding,
    } = style;

    // Parameter definition
    const fontSize = 20;
    const horizontalPadding = fontSize * 3;
    const verticalPadding = fontSize * (xLabel !== undefined ? 2 : 1);
    const widthInt = width - horizontalPadding;
    const heightInt = height - verticalPadding - 2 * padding;

    // Barchart variable width definition
    const barWidth =
    (widthInt / data.length)
    - (paddingInner * widthInt / data.length);

    // Main svg canvas container
    const svg = d3.select('#myChart')
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    // Y axis scale function
    const y = d3.scaleLinear()
      .domain([0, d3.max(data, (d) => d.height) * 1.1])
      .range([heightInt, 0]);

    // X axis scale function
    const x = d3.scaleBand()
      .domain(data.map(val => val.name))
      .range([
        horizontalPadding,
        widthInt + horizontalPadding - 2 * padding - 2
      ])
      .paddingInner(paddingInner)
      .paddingOuter(paddingOuter);

    // Y axis render
    const yAxisCall = d3.axisLeft(y)
      .tickFormat((d) => `${d}%`)
      .ticks(20)
      .tickSize(- widthInt + 2 * padding);
    svg.append('g')
      .attr('class', 'y-axis grid')
      .attr('transform', `translate(${horizontalPadding}, ${0})`)
      .call(yAxisCall);
    svg.append('text')
      .attr('class', 'y axis-label')
      .attr('transform', 'rotate(-90)')
      .attr('x', - height / 2)
      .attr('y', (fontSize * 0.8))
      .attr('font-size', `${fontSize}px`)
      .attr('text-anchor', 'middle')
      .text(yLabel);

    // X axis render
    const xAxisCall = d3.axisBottom(x);
    svg.append('g')
      .attr('class', 'x axis')
      .attr('transform', `translate(${0}, ${heightInt})`)
      .call(xAxisCall);
    if (xLabel !== undefined) {
      svg.append('text')
        .attr('class', 'x axis-label')
        .attr('x', (width + horizontalPadding) / 2)
        .attr('y', height - (fontSize * 0.3) - 2 * padding)
        .attr('font-size', `${fontSize}px`)
        .attr('text-anchor', 'middle')
        .text(xLabel);
    }

    // Bar chart render
    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('y', (d) => y(d.height))
      .attr('x', (d, i) => x(d.name))
      .attr('width', barWidth)
      .attr('height', (d) => heightInt - y(d.height))
      .attr('fill', (d, i) => d3.schemeCategory10[i]);

    // Bar-top annotations
    svg.selectAll('svg')
      .data(data)
      .enter()
      .append('text')
      .text((d) => `${d.height}%`)
      .attr('x', (d, i) => x(d.name) + barWidth / 2)
      .attr('y', (d) => y(d.height) - 5)
      .attr('text-anchor', 'middle')
      .attr("fill", "#000000");
  }

  render () {
    const { style } = this.props;
    return <div style={style} id="myChart" />;
  };
}

Barchart.propTypes = {
  data: PropTypes.array.isRequired,
  paddingInner: PropTypes.number,
  paddingOuter: PropTypes.number,
  style: PropTypes.object,
  xLabel: PropTypes.string,
  yLabel: PropTypes.string,
};

Barchart.defaultProps = {
  paddingInner: 0.2,
  paddingOuter: 0.1,
  xLabel: undefined,
  yLabel: 'Y Axis',
  style: {
    width: 800,
    height: 400,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    padding: 0,
    borderColor: 'black',
    borderWidth: 1,
    borderStyle:'',
    backgroundColor: '',
  }
};

export default Barchart;
