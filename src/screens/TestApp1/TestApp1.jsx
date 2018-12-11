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
  Button,
  Menu,
  MenuItem,
} from '@material-ui/core';
import {
  Menu as MenuIcon,
  ArrowDropDown,
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
  background-color: #EEE;
`;

const styles = theme => ({
  root: {
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
  appBar: {
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
    flex: 1,
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
      shoppinglistsMenuIndex: 0,
      shoppinglistsMenuAnchor: null,
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
    () => this.setState({ drawerOpen: !this.state.drawerOpen });

  handleMobileDrawerToggle =
    () => this.setState({ mobileOpen: !this.state.mobileOpen });

  handleShoppinglistsMenuOpen =
    (event) => this.setState({ shoppinglistsMenuAnchor: event.currentTarget });

  handleShoppinglistsMenuClose =
    () => this.setState({ shoppinglistsMenuAnchor: null });

  handleShoppinglistsMenuSelect =
    (index) => () => this.setState({
      shoppinglistsMenuIndex: index,
      shoppinglistsMenuAnchor: null,
    });

  renderHeader = ({
    classes,
    user,
    renderShopListMenu,
    currentListName,
  }) => (
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
          <div className={classes.profileSection}>
            <img src={profile} className={classes.profilePic} alt="Nada" />
            <Typography variant="subtitle1" color="inherit">
              <b>{user.name}</b>
              {` / ${user.storeNbr}`}
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
      <AppBar position="static" className={classes.appBar}>
        {
          renderShopListMenu
            ? (
              <Toolbar>
                <Button
                  aria-haspopup="true"
                  onClick={this.handleShoppinglistsMenuOpen}
                >
                  <Typography variant="h6">
                    {currentListName}
                  </Typography>
                  <ArrowDropDown />
                </Button>
              </Toolbar>
            ) : (
              <Toolbar />
            )
        }
      </AppBar>
    </div>
  );

  render() {
    const {
      drawerOpen,
      mobileOpen,
      shoppinglistsMenuAnchor,
      shoppinglistsMenuIndex,
    } = this.state;
    const {
      classes,
      routes,
      system,
      location,
      lists,
    } = this.props;
    const renderShopListMenu = system[TYPES.LISTS_DOWNLOADED]
    && location.pathname === PATHS.TEST_APP_1_SHOPPING_LISTS;
    const Header = this.renderHeader;
    const { shoppinglistsList } = lists;
    const currentListName = shoppinglistsList.length > 0
      ? shoppinglistsList[shoppinglistsMenuIndex].listName : '';

    const userObj = {
      name: 'John Cena',
      storeNbr: 1212,
    };

    return (
      <Div>
        <Header
          classes={classes}
          user={userObj}
          renderShopListMenu={renderShopListMenu}
          currentListName={currentListName}
        />
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
        <Menu
          id="simple-menu"
          anchorEl={shoppinglistsMenuAnchor}
          open={Boolean(shoppinglistsMenuAnchor)}
          onClose={this.handleShoppinglistsMenuClose}
        >
          {shoppinglistsList.map((option, index) => (
            <MenuItem
              key={option.listName}
              selected={index === shoppinglistsMenuIndex}
              onClick={this.handleShoppinglistsMenuSelect(index)}
            >
              {option.listName}
            </MenuItem>
          ))}
        </Menu>
      </Div>
    );
  }
}

const mapStateToProps = (state) => {
  const { system, lists } = state;
  return { system, lists };
};

export default connect(mapStateToProps)(withStyles(styles)(TestApp1));
