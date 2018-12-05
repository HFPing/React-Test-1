import React, { PureComponent } from 'react';
import { CssBaseline } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';

import Drawer from '../../components/Drawer';

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

const BottomBar = ({ classes }) => (
  <AppBar position="fixed" color="primary" className={classes.appBarBottom}>
    <Toolbar className={classes.toolbar}>
      <IconButton color="inherit" aria-label="Open drawer">
        <MenuIcon />
      </IconButton>
      <div>
        <IconButton color="inherit">
          <SearchIcon />
        </IconButton>
        <IconButton color="inherit">
          <MoreIcon />
        </IconButton>
      </div>
    </Toolbar>
  </AppBar>
);

class Home extends PureComponent {
  state = {
    drawerOpen: false,
  };

  handleDrawerToggle = () => this.setState({ drawerOpen: !this.state.drawerOpen });

  renderHeader = ({ classes }) => (
    <AppBar position="static">
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
          Home Screen
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );

  render() {
    const { drawerOpen } = this.state;
    const { classes } = this.props;
    const Header = this.renderHeader;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Header classes={classes} />
          Home Screen
        <BottomBar classes={classes} />
        <Drawer
          open={drawerOpen}
          onClose={this.handleDrawerToggle}
          anchor="left" />
      </div>
    );
  }
}

export default withStyles(styles)(Home);
