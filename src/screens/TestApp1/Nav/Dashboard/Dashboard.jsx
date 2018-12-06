import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
  IconButton,
  CircularProgress,
} from '@material-ui/core';

import { ACTIONS, TYPES } from '../../../../redux/actions';

const Div = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const styles = theme => ({
  root: {
  },
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

class Dashboard extends PureComponent {
  componentDidMount() {
    const { dispatch, system } = this.props;
    if (!system[TYPES.LISTS_DOWNLOADED]) {
      dispatch(ACTIONS.initDashboard());
    }
  }

  render() {
    const { classes, system } = this.props;
    console.log(this.props);

    if (system.loading) {
      return (
        <Div className={classes.root}>
          <CircularProgress className={classes.progress} color="secondary" size={150} />
          <Typography variant="h5" color="inherit">
            {system.type}
          </Typography>
        </Div>
      );
    }
    return (
      <Div className={classes.root}>
        Test
      </Div>
    );
  }
}

Dashboard.propTypes = {
  dispatch: PropTypes.func.isRequired,
  classes: PropTypes.shape({}).isRequired,
  system: PropTypes.shape({}).isRequired,
};

const mapStateToProps = (state) => {
  const { system, lists } = state;
  return { system, lists };
};

export default connect(mapStateToProps)(withStyles(styles)(Dashboard));
