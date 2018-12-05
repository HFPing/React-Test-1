import React, { PureComponent } from 'react';
import {
  AppBar,
  Tabs,
  Tab,
  Toolbar,
  Typography,
  Button,
  IconButton
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';

import Drawer from '../../components/Drawer';

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
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  appBarBottom: {
    top: 'auto',
    bottom: 0,
  },
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
};

class Plots extends PureComponent {
  state = {
    value: 0,
    drawerOpen: false,
  };

  handleChange = (event, value) => this.setState({ value });

  handleDrawerToggle = () => this.setState({ drawerOpen: !this.state.drawerOpen });

  renderHeader = ({ classes, value }) => (
    <AppBar position="relative" style={{ elevation: 0 }} >
      <Toolbar>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
          onClick={this.handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          Charts and Plots Demo
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
      <Tabs scrollable value={value} onChange={this.handleChange} style={{ elevation: 0 }}>
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
  );

  render() {
    const { value, drawerOpen } = this.state;
    const { classes } = this.props;
    const Header = this.renderHeader;

    return (
      <div style={styles.root}>
        <Header classes={classes} value={value} />
        {value === 0 && <Example1 />}
        {value === 1 && <Example2 />}
        {value === 2 && <Example3 />}
        {value === 3 && <Example4 />}
        {value === 4 && <Example5 />}
        {value === 5 && <Example6 />}
        {value === 6 && <Example7 />}
        {value === 7 && <Example8 />}
        {value === 8 && <Example9 />}
        <Drawer
          open={drawerOpen}
          onClose={this.handleDrawerToggle}
          anchor="left" />
      </div>
    );
  }
}

export default withStyles(styles)(Plots);
