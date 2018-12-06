import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
  IconButton,
} from '@material-ui/core';

const styles = theme => ({
  root: {
    backgroundCoor: '#EEE',
  },
});

class Dashboard extends PureComponent {
  render() {
    const { classes, dispatch } = this.props;
    console.log(this.props);

    return (
      <div className={classes.root}>
        Test
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(withStyles(styles)(Dashboard));
