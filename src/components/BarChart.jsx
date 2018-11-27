import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import * as d3 from 'd3';

const data = [
  {
    name: 'BAE',
    height: 10.88,
  },
  {
    name: 'BOD',
    height: 42.16,
  },
  {
    name: 'MBO',
    height: 7.85,
  },
  {
    name: 'SCE',
    height: 33.39,
  },
  {
    name: 'SUP',
    height: 5.71,
  },
];

class Barchart extends PureComponent {
  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    const { style, paddingInner, paddingOuter  } = this.props;
    const {
      width,
      height,
      marginLeft,
      marginRight,
      marginTop,
      marginBottom,
    } = style;

    const fontSize = 20;
    const leftPadding = fontSize * 3;
    const widthInt = width - marginLeft - marginRight;
    const heightInt = height - marginTop - marginBottom - fontSize;

    const nameDomain = data.map(val => val.name);

    const barWidth =
    (widthInt / nameDomain.length)
    - (paddingInner * widthInt / nameDomain.length);

    const svg = d3.select('#myChart')
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    const g = svg.append('g');

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, (d) => d.height)])
      .range([heightInt, 0]);
      //.range([0, heightInt]);

    const x = d3.scaleBand()
      .domain(nameDomain)
      .range([
        marginLeft + fontSize,
        widthInt * (1 + (paddingInner / ((nameDomain.length + 1) ** 2))) + marginRight + fontSize
      ])
      .paddingInner(paddingInner)
      .paddingOuter(paddingOuter);

    const xAxisCall = d3.axisBottom(x);
    g.append('g')
      .attr('class', 'x axis')
      .attr('transform', `translate(${0}, ${height - marginBottom - fontSize})`)
      .call(xAxisCall);
    g.append('text')
      .attr('class', 'x axis-label')
      .attr('x', (width / 2) + fontSize)
      .attr('y', height - marginBottom + (fontSize * 0.7))
      .attr('font-size', `${fontSize}px`)
      .attr('text-anchor', 'middle')
      .text('Something');

    const yAxisCall = d3.axisLeft(y)
      .tickFormat((d) => `${d}%`);
    g.append('g')
      .attr('class', 'y-axis')
      .attr('transform', `translate(${marginLeft + fontSize}, ${marginTop})`)
      .call(yAxisCall);
    g.append('text')
      .attr('class', 'y axis-label')
      .attr('transform', 'rotate(-90)')
      .attr('x', - height / 2)
      .attr('y', (fontSize * 0.8))
      .attr('font-size', `${fontSize}px`)
      .attr('text-anchor', 'middle')
      .text('% of Total Sales');

    const rects = g.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      //.attr('y', marginTop)
      .attr('y', (d) => y(d.height) + marginTop)
      .attr('x', (d, i) => x(d.name))
      .attr('width', barWidth)
      .attr('height', (d) => heightInt - y(d.height))
      //.attr('height', (d) => y(d.height))
      .attr('fill', (d) => 'grey');
  }

  render = () => {
    const { style } = this.props;
    return(
      <div
        id="myChart"
        style={{
          backgroundColor: '#EEEEEE',
          ...style,
        }}
      />
    );
  };
}

Barchart.propTypes = {

};

Barchart.defaultProps = {
  paddingInner: 0.2,
  paddingOuter: 0.05,
  style: {
    width: 800,
    height: 400,
    marginLeft: 30,
    marginRight: 0,
    marginTop: 10,
    marginBottom: 20,
  }
};

export default Barchart;
