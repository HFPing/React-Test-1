import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import * as d3 from 'd3';

import Example1 from './Tabs/Example1';
import Example2 from './Tabs/Example2';
import Example3 from './Tabs/Example3';
import Example4 from './Tabs/Example4';

const styles = {
  root: {
    flexGrow: 1,
  }
};

class Plots extends PureComponent {
  state = { value: 0 };

  handleChange = (event, value) => this.setState({ value });

  render() {
    const { value } = this.state;
    return (
      <div style={styles.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Example 1" />
            <Tab label="Example 2" />
            <Tab label="Example 3" />
            <Tab label="Example 4" />
          </Tabs>
        </AppBar>
        {value === 0 && <Example1 />}
        {value === 1 && <Example2 />}
        {value === 2 && <Example3 />}
        {value === 3 && <Example4 />}
      </div>
    );
  }
}

export default Plots;
