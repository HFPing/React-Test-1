import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Fab,
} from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
});

class Dashboard extends PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        Test
      </div>
    );
  }
}

export default withStyles(styles)(Dashboard);
