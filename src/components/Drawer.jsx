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
} from '@material-ui/core';
import {
  Home,
  PieChart,
  ShoppingCart,
} from '@material-ui/icons';
import { Icon } from 'react-icons-kit';
import { microchip } from 'react-icons-kit/fa/microchip';

import { PATHS } from '../routes';

const DRAWER_WIDTH = 240;

class MyDrawer extends PureComponent {
  activeRoute =
    (routeName) => this.props.location.pathname === routeName;

  navigateToScreen = (screen) => () => {
    const { history } = this.props;
    history.push(screen);
  }

  render() {
    const {
      classes,
      onClose,
      open,
      anchor,
    } = this.props;

    return (
      <nav className={classes.drawer}>
        <Drawer
          open={open}
          anchor={anchor}
          onClose={onClose}
          variant="temporary"
          classes={{ paper: classes.drawerPaper }}
          ModalProps={{ keepMounted: true }}
        >
          <List>
            <ListItem
              button
              selected={this.activeRoute(PATHS.HOME)}
              onClick={this.navigateToScreen(PATHS.HOME)}
            >
              <ListItemIcon><Home /></ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem
              button
              selected={this.activeRoute(PATHS.PLOTS)}
              onClick={this.navigateToScreen(PATHS.PLOTS)}
            >
              <ListItemIcon><PieChart /></ListItemIcon>
              <ListItemText primary="Charts" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><Icon icon={microchip} /></ListItemIcon>
              <ListItemText primary="Web GL" />
            </ListItem>
            <ListItem
              button
              selected={this.activeRoute(PATHS.TEST_APP_1_HOME)}
              onClick={this.navigateToScreen(PATHS.TEST_APP_1_HOME)}
            >
              <ListItemIcon><ShoppingCart /></ListItemIcon>
              <ListItemText primary="Test App" />
            </ListItem>
          </List>
        </Drawer>
      </nav>
    );
  }
}

MyDrawer.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  onClose: PropTypes.func.isRequired,
  anchor: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  history: PropTypes.shape({}).isRequired,
};

const styles = theme => ({
  root: { display: 'flex' },
  drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: { width: DRAWER_WIDTH },
});

export default withRouter(withStyles(styles)(MyDrawer));
