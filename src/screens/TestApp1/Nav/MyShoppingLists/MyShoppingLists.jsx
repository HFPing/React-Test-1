import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
  withStyles,
  Paper,
  AppBar,
  Toolbar,
} from '@material-ui/core';

import { DRAWER_WIDTH } from '../../../../components/ResponsiveDrawer';
import EnhancedTable from './Table/EnhancedTable';

const createData = (id, label, numeric = true, disablePadding = false) => ({
  id,
  label,
  numeric,
  disablePadding,
});

const rowStructure = [
  createData('itemName', 'ITEM', false, true),
  createData('sku', 'SKU #'),
  createData('upc', 'UPC'),
  createData('storePrice', 'Store Price', false, true),
  createData('edit', ''),
];

const data = [
  {
    id: 0,
    itemName: 'Atun',
    sku: 12332334,
    upc: 23443332,
    storePrice: '15 $',
  },
  {
    id: 1,
    itemName: 'Jamon',
    sku: 12332334,
    upc: 23443332,
    storePrice: '25 $',
  },
];

const Div = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const styles = theme => ({
  paper: {
    width: '100%',
    margin: theme.spacing.unit * 3,
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

class MyShoppingLists extends PureComponent {
  state = {
    selectedList: 0,
  };

  render() {
    const { classes } = this.props;

    return (
      <Div>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar />
        </AppBar>
        <Paper className={classes.paper}>
          <EnhancedTable rowStructure={rowStructure} data={data} />
        </Paper>
      </Div>
    );
  }
}

MyShoppingLists.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

const mapStateToProps = (state) => {
  const { system, lists } = state;
  return { system, lists };
};

export default connect(mapStateToProps)(withStyles(styles)(MyShoppingLists));
