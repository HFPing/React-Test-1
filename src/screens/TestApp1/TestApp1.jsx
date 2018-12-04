import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
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
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
};

class TestApp1 extends PureComponent {
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
          Test App
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
        <Header classes={classes} />
          Home Screen
        <Drawer
          container={this.props.container}
          open={drawerOpen}
          onClose={this.handleDrawerToggle}
          anchor="left" />
      </div>
    );
  }
}

export default withStyles(styles)(TestApp1);
