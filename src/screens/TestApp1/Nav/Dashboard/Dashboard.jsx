import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
  CircularProgress,
} from '@material-ui/core';

import { ACTIONS, TYPES } from '../../../../redux/actions';

import CompetitorsList from './CompetitorsList/CompetitorsList';

/*
const Div = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
*/

const DivCent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #EEE;
`;

const Div = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #EEE;
`;

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4,
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
    const { classes, system, lists } = this.props;
    const { competitorsList } = lists;

    if (system.loading) {
      return (
        <DivCent className={classes.root}>
          <CircularProgress className={classes.progress} color="secondary" size={150} />
          <Typography variant="h5" color="inherit">
            {system.type}
          </Typography>
        </DivCent>
      );
    }
    return (
      <Div className={classes.root}>
        <CompetitorsList competitorsList={competitorsList} />
      </Div>
    );
  }
}

Dashboard.propTypes = {
  dispatch: PropTypes.func.isRequired,
  classes: PropTypes.shape({}).isRequired,
  system: PropTypes.shape({}).isRequired,
  lists: PropTypes.shape({}).isRequired,
};

const mapStateToProps = (state) => {
  const { system, lists } = state;
  return { system, lists };
};

export default connect(mapStateToProps)(withStyles(styles)(Dashboard));
