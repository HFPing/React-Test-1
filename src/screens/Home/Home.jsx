import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { CssBaseline } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';

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

const Header = ({ classes }) => (
  <AppBar position="static">
    <Toolbar>
      <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" color="inherit" className={classes.grow}>
        Home Screen
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
);

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
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <Header classes={classes} />
          Home Screen
        <BottomBar classes={classes} />
      </div>
    );
  }
}

export default withStyles(styles)(Home);
