import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  withStyles,
  Typography,
  CircularProgress,
  AppBar,
  Toolbar,
} from '@material-ui/core';

import { ACTIONS, TYPES } from '../../../../redux/actions';

import { DRAWER_WIDTH } from '../../../../components/ResponsiveDrawer';
import CompetitorsList from './CompetitorsList/CompetitorsList';
import ShoppinglistsList from './ShoppinglistsList/ShoppinglistsList';
import NewCompetitorModal from '../Modals/NewCompetitorModal';
import NewShoppinglistModal from '../Modals/NewShoppinglistModal';

const styles = theme => ({
  root: {
    marginTop: theme.mixins.toolbar.minHeight + theme.spacing.unit,
    padding: theme.spacing.unit * 5,
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 5,
      paddingRight: theme.spacing.unit * 5,
    },
  },
  progress: {
    margin: theme.spacing.unit * 2,
  },
  appBar: {
    marginTop: theme.mixins.toolbar.minHeight + theme.spacing.unit,
    marginLeft: DRAWER_WIDTH,
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    backgroundColor: '#F5F5F5',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#A0A0A0',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
});

class Dashboard extends PureComponent {
  state = {
    newCompOpen: false,
    newShopLstOpen: false,
  };

  componentDidMount() {
    const { dispatch, system } = this.props;
    if (!system[TYPES.LISTS_DOWNLOADED]) dispatch(ACTIONS.initDashboard());
  }

  newCompetitorModalHander =
    (open) => () => this.setState({ newCompOpen: open });

  newShoppinglistModalHander =
    (open) => () => this.setState({ newShopLstOpen: open });

  render() {
    const { newCompOpen, newShopLstOpen } = this.state;
    const { classes, system, lists } = this.props;
    const { competitorsList, shoppinglistsList } = lists;

    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar />
        </AppBar>
        {system.loading ? (
          <div>
            <CircularProgress className={classes.progress} color="secondary" size={150} />
            <Typography variant="h5" color="inherit">
              {system.type}
            </Typography>
          </div>
        ) : (
          <div>
            <CompetitorsList
              competitorsList={competitorsList}
              newCompModalHandler={this.newCompetitorModalHander(true)}
            />
            <ShoppinglistsList
              shoppinglistsList={shoppinglistsList}
              newShopLstHandler={this.newShoppinglistModalHander(true)}
            />
            <NewCompetitorModal
              open={newCompOpen}
              onClose={this.newCompetitorModalHander(false)}
            />
            <NewShoppinglistModal
              open={newShopLstOpen}
              onClose={this.newShoppinglistModalHander(false)}
            />
          </div>
        )}
      </div>
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
