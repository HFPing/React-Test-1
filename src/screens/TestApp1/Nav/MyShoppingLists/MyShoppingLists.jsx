import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
  withStyles,
  Paper,
  AppBar,
  Toolbar,
  Menu,
  MenuItem,
  Button,
  Typography,
} from '@material-ui/core';
import {
  ArrowDropDown,
} from '@material-ui/icons';

import { DRAWER_WIDTH } from '../../../../components/ResponsiveDrawer';
import EnhancedTable from './Table/EnhancedTable';
import { TYPES } from '../../../../redux/actions';

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
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const styles = theme => ({
  root: {
    marginTop: theme.mixins.toolbar.minHeight + theme.spacing.unit,
  },
  paper: {
    width: '100%',
    margin: theme.spacing.unit * 3,
  },
  appBar: {
    marginTop: theme.mixins.toolbar.minHeight + theme.spacing.unit,
    marginLeft: DRAWER_WIDTH,
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    backgroundColor: '#FFFFFFAA',
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
    shoppinglistsMenuIndex: 0,
    shoppinglistsMenuAnchor: null,
  };

  handleShoppinglistsMenuOpen =
    (event) => this.setState({ shoppinglistsMenuAnchor: event.currentTarget });

  handleShoppinglistsMenuClose =
    () => this.setState({ shoppinglistsMenuAnchor: null });

  handleShoppinglistsMenuSelect =
    (index) => () => this.setState({
      shoppinglistsMenuIndex: index,
      shoppinglistsMenuAnchor: null,
    });

  render() {
    const {
      classes,
      system,
      lists: { shoppinglistsList },
    } = this.props;
    const {
      shoppinglistsMenuAnchor,
      shoppinglistsMenuIndex,
    } = this.state;

    const renderShopListMenu = system[TYPES.LISTS_DOWNLOADED];
    const currentListName = shoppinglistsList.length > 0
      ? shoppinglistsList[shoppinglistsMenuIndex].listName : '';

    return (
      <Div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Button
              aria-haspopup="true"
              onClick={this.handleShoppinglistsMenuOpen}
            >
              <Typography variant="h6">
                {currentListName}
              </Typography>
              <ArrowDropDown />
            </Button>
          </Toolbar>
        </AppBar>
        <Paper className={classes.paper}>
          <EnhancedTable rowStructure={rowStructure} data={data} />
        </Paper>
        <Menu
          id="simple-menu"
          anchorEl={shoppinglistsMenuAnchor}
          open={Boolean(shoppinglistsMenuAnchor)}
          onClose={this.handleShoppinglistsMenuClose}
        >
          {shoppinglistsList.map((option, index) => (
            <MenuItem
              key={option.listName}
              selected={index === shoppinglistsMenuIndex}
              onClick={this.handleShoppinglistsMenuSelect(index)}
            >
              {option.listName}
            </MenuItem>
          ))}
        </Menu>
      </Div>
    );
  }
}

MyShoppingLists.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  system: PropTypes.shape({}).isRequired,
  lists: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = (state) => {
  const { system, lists } = state;
  return { system, lists };
};

export default connect(mapStateToProps)(withStyles(styles)(MyShoppingLists));
