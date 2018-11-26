import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';

import Home from './screens/Home/Home';
import Plots from './screens/Plots/Plots';

const Error = () => (
  <div>
    <p>Path does not exist</p>
  </div>
)

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
  <AppBar position="relative">
    <CssBaseline />
    <Toolbar>
      <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" color="inherit" className={classes.grow}>
        React Demo
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
);

const BottomBar = ({ classes }) => (
  <AppBar position="absolute" color="primary" className={classes.appBarBottom}>
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


const App = ({ classes }) => (
  <BrowserRouter>
    <MuiThemeProvider>
      <Header classes={classes} />
      <div style={{ }}>
        <Route exact path="/home" component={Home} />
        <Route path="/" component={Plots} />
        {/*<Route component={Error} />*/}
        {/*<BottomBar classes={classes} />*/}
      </div>
    </MuiThemeProvider>
  </BrowserRouter>
);

export default withStyles(styles)(App);
