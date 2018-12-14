import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { Switch } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Fab,
} from '@material-ui/core';
import {
  Menu as MenuIcon,
} from '@material-ui/icons';
import { Icon } from 'react-icons-kit';
import { u1F6A7 } from 'react-icons-kit/noto_emoji_regular/u1F6A7';

import { Drawer, RouteWithSubRoutes, ResponsiveDrawer } from '../../components';
import { DRAWER_WIDTH } from '../../components/ResponsiveDrawer';

import { PATHS } from '../../routes';
import { TYPES } from '../../redux/actions';

const logo = require('../../assets/TestApp1/logo.png');
const profile = require('../../assets/TestApp1/profile.jpg');

const Div = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const styles = theme => ({
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
  appBar: {
    // backgroundColor: '#FFFFFFAA',
    marginBottom: theme.mixins.toolbar.minHeight + theme.spacing.unit,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
  profileSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
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
    marginTop: theme.mixins.toolbar.minHeight + theme.spacing.unit,
    flex: 1,
    marginLeft: DRAWER_WIDTH,
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
      marginTop: theme.mixins.toolbar.minHeight,
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

  componentDidMount() {
    const { system } = this.props;
    if (!system[TYPES.LISTS_DOWNLOADED]) this.navigateToDashboard();
  }

  navigateToDashboard = () => {
    const { history } = this.props;
    history.push(PATHS.TEST_APP_1_HOME);
  }

  handleDrawerToggle =
    () => this.setState(state => ({ drawerOpen: !state.drawerOpen }));

  handleMobileDrawerToggle =
    () => this.setState(state => ({ mobileOpen: !state.mobileOpen }));

  renderHeader = ({
    classes,
    user,
  }) => (
    <AppBar position="fixed" className={classes.appBar}>
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
        <div className={classes.profileSection}>
          <img src={profile} className={classes.profilePic} alt="Nada" />
          <Typography variant="subtitle1" color="inherit">
            <b>{user.name}</b>
            {` / ${user.storeNbr}`}
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );

  render() {
    const {
      drawerOpen,
      mobileOpen,
    } = this.state;
    const {
      classes,
      routes,
    } = this.props;
    const Header = this.renderHeader;

    const userObj = {
      name: 'John Cena',
      storeNbr: 1212,
    };

    return (
      <Div>
        <Header
          classes={classes}
          user={userObj}
        />
        <div className={classes.content}>
          <Switch>
            {/* eslint-disable-next-line */}
            {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
          </Switch>
        </div>
        <ResponsiveDrawer
          user={userObj}
          open={mobileOpen}
          onClose={this.handleMobileDrawerToggle}
          anchor="left"
        />
        <Drawer
          open={drawerOpen}
          onClose={this.handleDrawerToggle}
          anchor="left"
        />
        <Fab
          color="primary"
          className={classes.fab}
          onClick={this.handleDrawerToggle}
        >
          <Icon icon={u1F6A7} size={32} />
        </Fab>
      </Div>
    );
  }
}

const mapStateToProps = (state) => {
  const { system, lists } = state;
  return { system, lists };
};

export default connect(mapStateToProps)(withStyles(styles)(TestApp1));
