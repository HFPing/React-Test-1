import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { withStyles } from '@material-ui/core/styles';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  Hidden,
  Toolbar,
  AppBar,
  Divider,
  Typography,
} from '@material-ui/core';
import {
  Dashboard,
  Feedback,
  Language,
  ExitToApp,
  Description,
  ShoppingCart,
} from '@material-ui/icons';

import { PATHS } from '../routes';

const profile = require('../assets/TestApp1/profile.jpg');

export const DRAWER_WIDTH = 270;

class ResponsiveDrawer extends PureComponent {
  activeRoute =
    (routeName) => this.props.location.pathname === routeName;

  navigateToScreen = (screen, mobile) => () => {
    const { history, onClose } = this.props;
    if (mobile) onClose();
    history.push(screen);
  }

  renderDrawerContent = ({ classes, mobile, user }) => (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar />
      </AppBar>
      <div className={classes.profileSection}>
        <img src={profile} className={classes.profilePic} alt="Nada" />
        <Typography variant="subtitle1" color="textSecondary">
          <b>{user.name}</b>
          {` / Store ${user.storeNbr}`}
        </Typography>
      </div>
      <List>
        <ListItem
          button
          selected={this.activeRoute(PATHS.TEST_APP_1_HOME)}
          onClick={this.navigateToScreen(PATHS.TEST_APP_1_HOME, mobile)}
        >
          <ListItemIcon><Dashboard /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem
          button
          selected={this.activeRoute(PATHS.TEST_APP_1_SHOPPING_LISTS)}
          onClick={this.navigateToScreen(PATHS.TEST_APP_1_SHOPPING_LISTS, mobile)}
        >
          <ListItemIcon><ShoppingCart /></ListItemIcon>
          <ListItemText primary="My Shopping Lists" />
        </ListItem>
        <ListItem
          button
          selected={this.activeRoute(PATHS.TEST_APP_1_TEXT)}
          onClick={this.navigateToScreen(PATHS.TEST_APP_1_TEXT, mobile)}
        >
          <ListItemIcon><Description /></ListItemIcon>
          <ListItemText primary="Text Page" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon><Feedback /></ListItemIcon>
          <ListItemText primary="Feedback" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><Language /></ListItemIcon>
          <ListItemText primary="Change Language" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon><ExitToApp /></ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </div>
  )

  render() {
    const {
      classes,
      onClose,
      open,
      anchor,
      user,
    } = this.props;
    const DrawerContent = this.renderDrawerContent;

    return (
      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={anchor}
            open={open}
            onClose={onClose}
            classes={{ paper: classes.drawerPaper }}
            ModalProps={{ keepMounted: true }}
          >
            <DrawerContent classes={classes} user={user} mobile />
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{ paper: classes.drawerPaper }}
            variant="permanent"
            open
          >
            <DrawerContent classes={classes} user={user} mobile={false} />
          </Drawer>
        </Hidden>
      </nav>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  anchor: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({}).isRequired,
  user: PropTypes.shape({
    user: PropTypes.string,
    storeNbr: PropTypes.number,
  }).isRequired,
};

const styles = theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: DRAWER_WIDTH,
      flexShrink: 0,
    },
  },
  appBar: {
    backgroundColor: '#F5F5F5',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#A0A0A0',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  drawerPaper: {
    width: DRAWER_WIDTH,
    marginTop: theme.mixins.toolbar.minHeight + theme.spacing.unit,
    [theme.breakpoints.down('xs')]: {
      marginTop: 0,
    },
  },
  profileSection: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 50,
  },
});

export default withRouter(withStyles(styles)(ResponsiveDrawer));
