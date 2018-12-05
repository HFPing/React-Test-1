import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styled from "styled-components";
import { Route, Switch } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Fab,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Icon } from 'react-icons-kit';
import { u1F6A7 } from 'react-icons-kit/noto_emoji_regular/u1F6A7';

import { Drawer, RouteWithSubRoutes, ResponsiveDrawer } from '../../components';
import { DRAWER_WIDTH } from '../../components/ResponsiveDrawer';

const logo = require('../../assets/TestApp1/logo.png');
const profile = require('../../assets/TestApp1/profile.jpg');

const Div = styled.div`
  height: 100vh;
  background-color: green;
`;

const styles = theme => ({
  root: {
    backgroundColor: 'red',
  },
  grow: {
    flexGrow: 1,
    fontFamily: 'Monoton',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  appBarResponsive: {
    marginLeft: DRAWER_WIDTH,
    backgroundColor: '#F5F5F5',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#A0A0A0',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 20,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
  content: {
    marginLeft: DRAWER_WIDTH,
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
});

class TestApp1 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false,
      mobileOpen: false,
    };
  }

  handleDrawerToggle = () =>
    this.setState({ drawerOpen: !this.state.drawerOpen });

  handleMobileDrawerToggle = () =>
    this.setState({ mobileOpen: !this.state.mobileOpen });

  renderHeader = ({ classes }) => (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={this.handleMobileDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <img src={logo} className={classes.logo} alt="Nada" />
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Shop App
          </Typography>
          <img src={profile} className={classes.profilePic} alt="Nada" />
          <Typography variant="subtitle1" color="inherit">
            <b>John Cena</b> / Store 1212 
          </Typography>
        </Toolbar>
      </AppBar>
      <AppBar position="static" className={classes.appBarResponsive}>
        <Toolbar>
        </Toolbar>
      </AppBar>
    </div>
  );

  render() {
    const { drawerOpen, mobileOpen } = this.state;
    const { classes, routes } = this.props;
    const Header = this.renderHeader;
    console.log(this.props);

    return (
      <Div>
        <Header classes={classes} />
        <div className={classes.content}>
          <Switch>
            {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
          </Switch>
        </div>
        <Fab
          color="primary"
          className={classes.fab}
          onClick={this.handleDrawerToggle}
        >
          <Icon icon={u1F6A7} size={32} />
        </Fab>
        <ResponsiveDrawer
          open={mobileOpen}
          onClose={this.handleMobileDrawerToggle}
          anchor="left" />
        <Drawer
          open={drawerOpen}
          onClose={this.handleDrawerToggle}
          anchor="left" />
      </Div>
    );
  }
}

export default withStyles(styles)(TestApp1);
