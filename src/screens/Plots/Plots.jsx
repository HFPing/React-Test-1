import React, { PureComponent } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Example1 from './Tabs/Example1';
import Example2 from './Tabs/Example2';
import Example3 from './Tabs/Example3';
import Example4 from './Tabs/Example4';
import Example5 from './Tabs/Example5';
import Example6 from './Tabs/Example6';
import Example7 from './Tabs/Example7';
import Example8 from './Tabs/Example8';
import Example9 from './Tabs/Example9';

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
          <Tabs scrollable value={value} onChange={this.handleChange}>
            <Tab label="Main" />
            <Tab label="D3 Share of Format" />
            <Tab label="D3 Tuto" />
            <Tab label="Am Charts Demo" />
            <Tab label="Tuto - Scaling" />
            <Tab label="Tuto - Axis" />
            <Tab label="Tuto - SVG Elements" />
            <Tab label="Tuto - Pie Charts" />
            <Tab label="Tuto - Line Charts" />
          </Tabs>
        </AppBar>
        {value === 0 && <Example1 />}
        {value === 1 && <Example2 />}
        {value === 2 && <Example3 />}
        {value === 3 && <Example4 />}
        {value === 4 && <Example5 />}
        {value === 5 && <Example6 />}
        {value === 6 && <Example7 />}
        {value === 7 && <Example8 />}
        {value === 8 && <Example9 />}
      </div>
    );
  }
}

export default Plots;
