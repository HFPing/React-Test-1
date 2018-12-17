import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Badge,
  IconButton,
} from '@material-ui/core';
import {
  Menu,
  Search,
  MoreVert,
  MailSharp,
  Notifications,
  AccountCircle,
} from '@material-ui/icons';

import Drawer from '../../components/Drawer';

const styles = theme => ({
  root: {
    flexGrow: 1,
    flex: 1,
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
  main: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 10,
    padding: 10,
    marginBottom: theme.mixins.toolbar.minHeight + theme.spacing.unit,
    overflow: true,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: { display: 'flex' },
  },
});

const BottomBar = ({ classes }) => (
  <AppBar position="fixed" color="secondary" className={classes.appBarBottom}>
    <Toolbar className={classes.toolbar}>
      <Typography color="inherit" className={classes.title}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://material-ui.com/"
        >
            Material-UI
        </a>
      </Typography>
      <div>
        <IconButton color="inherit">
          <Search />
        </IconButton>
        <IconButton color="inherit">
          <MoreVert />
        </IconButton>
      </div>
    </Toolbar>
  </AppBar>
);

class Home extends PureComponent {
  state = {
    drawerOpen: false,
  };

  handleDrawerToggle = () => this.setState(state => ({ drawerOpen: !state.drawerOpen }));

  renderHeader = ({ classes }) => (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
          onClick={this.handleDrawerToggle}
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          Home Screen
        </Typography>
        <div className={classes.sectionDesktop}>
          <IconButton color="inherit">
            <Badge badgeContent={17} color="secondary">
              <MailSharp />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <Notifications />
            </Badge>
          </IconButton>
          <IconButton
            aria-owns="material-appbar"
            aria-haspopup="true"
            // onClick={this.handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );

  render() {
    const { drawerOpen } = this.state;
    const { classes } = this.props;
    const Header = this.renderHeader;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Header classes={classes} />
        <div className={classes.main}>
          Home Screen
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
          <div>prueba</div>
        </div>
        <BottomBar classes={classes} />
        <Drawer
          open={drawerOpen}
          onClose={this.handleDrawerToggle}
          anchor="left"
        />
      </div>
    );
  }
}

export default withStyles(styles)(Home);
