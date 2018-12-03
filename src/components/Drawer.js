import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { withStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer
} from "@material-ui/core";
import {
  Home,
  PieChart,
} from "@material-ui/icons";
import { Icon } from 'react-icons-kit'
import { microchip } from 'react-icons-kit/fa/microchip'

const DRAWER_WIDTH = 240;

class MyDrawer extends PureComponent {
  activeRoute =
    (routeName) =>
      this.props.location.pathname.indexOf(routeName) > -1 ? true : false;

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
      container,
      history,
    } = this.props;

    return (
      <nav className={classes.drawer}>
        <Drawer
          open={open}
          anchor={anchor}
          onClose={onClose}
          container={container}
          variant="temporary"
          classes={{ paper: classes.drawerPaper }}
          ModalProps={{ keepMounted: true }}>
            <List>
              <ListItem button onClick={this.navigateToScreen('/')}>
                <ListItemIcon><Home /></ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button onClick={this.navigateToScreen('/plots')}>
                <ListItemIcon><PieChart /></ListItemIcon>
                <ListItemText primary="Charts" />
              </ListItem>
              <ListItem button>
                <ListItemIcon><Icon icon={microchip} /></ListItemIcon>
                <ListItemText primary="Web GL" />
              </ListItem>
            </List>
        </Drawer>
      </nav>
    );
  }
}

MyDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  root: { display: "flex" },
  drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: { width: DRAWER_WIDTH }
});

export default withRouter(withStyles(styles)(MyDrawer));
