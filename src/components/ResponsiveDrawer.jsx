import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { withStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  Hidden,
  Toolbar,
  AppBar,
  Divider
} from "@material-ui/core";
import {
  Dashboard,
  Feedback,
  Language,
  ExitToApp
} from "@material-ui/icons";

export const DRAWER_WIDTH = 300;

class ResponsiveDrawer extends PureComponent {
  activeRoute =
    (routeName) => this.props.location.pathname === routeName;

  navigateToScreen = (screen) => () => {
    const { history } = this.props;
    history.push(screen);
  }

  renderDrawerContent = ({ classes }) => (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
        </Toolbar>
      </AppBar>
      <List>
        <ListItem button>
          <ListItemIcon><Dashboard /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <Divider />
        <div style={{ flex: 1, flexGrow: 1 }}>
          <ListItem button>
            <ListItemIcon><Feedback /></ListItemIcon>
            <ListItemText primary="Feedback" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><Language /></ListItemIcon>
            <ListItemText primary="Change Language" />
          </ListItem>
        </div>
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
      container,
    } = this.props;
    const DrawerContent = this.renderDrawerContent;

    return (
      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={anchor}
            open={open}
            onClose={onClose}
            classes={{ paper: classes.drawerPaper }}
            ModalProps={{ keepMounted: true }}
          >
            <DrawerContent classes={classes} />
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{ paper: classes.drawerPaper }}
            variant="permanent"
            open
          >
            <DrawerContent classes={classes} />
          </Drawer>
        </Hidden>
      </nav>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired
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
  }
});

export default withRouter(withStyles(styles)(ResponsiveDrawer));
