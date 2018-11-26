import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { CssBaseline } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';

import * as d3 from 'd3';

const styles = {
  root: {
    flexGrow: 1,
    backgroundColor: 'red',
  }
};

class Example1 extends PureComponent {
  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    const dataset = [1, 2, 3, 4, 5];
    d3.select('#myChart')
      .selectAll('p')
      .data(dataset)
      .enter()
      .append('p')
      .text((d) => d);
  }

  render() {
    return (
      <div id="myChart" />
    );
  }
}

export default Example1;
