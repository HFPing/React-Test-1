import React, { PureComponent } from 'react';
import {
  AppBar,
  Tabs,
  Tab,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';

import Drawer from '../../components/Drawer';

import Demo from './Tabs/Demo';
import BinaryTree from './Tabs/BinaryTree';

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
    <AppBar position="relative" style={{ elevation: 0 }}>
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
          P5.JS
        </Typography>
      </Toolbar>
      <Tabs scrollable value={value} onChange={this.handleChange} style={{ elevation: 0 }}>
        <Tab label="Demo" />
        <Tab label="Binary Tree" />
      </Tabs>
    </AppBar>
  );

  render() {
    const { value, drawerOpen } = this.state;
    const { classes } = this.props;
    const Header = this.renderHeader;
    let Screen = null;
    switch (value) {
      case 0:
        Screen = Demo;
        break;
      case 1:
        Screen = BinaryTree;
        break;
      default:
        break;
    }

    return (
      <div style={styles.root}>
        <Header classes={classes} value={value} />
        <Screen />
        <Drawer
          open={drawerOpen}
          onClose={this.handleDrawerToggle}
          anchor="left"
        />
      </div>
    );
  }
}

export default withStyles(styles)(Plots);
