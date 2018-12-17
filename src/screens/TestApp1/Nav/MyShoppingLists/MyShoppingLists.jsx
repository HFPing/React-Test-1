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
  Tooltip,
} from '@material-ui/core';
import {
  ArrowDropDown,
} from '@material-ui/icons';

import EnhancedTable from './Table/EnhancedTable';
import AddItemModal from '../Modals/AddItemModal';
import EditItemModal from '../Modals/EditItemModal';

import { DRAWER_WIDTH } from '../../../../components/ResponsiveDrawer';
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
    shoppinglistsMenuIndex: 0,
    shoppinglistsMenuAnchor: null,
    addItemOpen: false,
    editItemOpen: false,
    itemToEdit: 0,
  };

  editItemModalOpen =
    (idx) => () => this.setState({ editItemOpen: true, itemToEdit: idx });

  editItemModalHandler =
    (data) => () => this.setState({ editItemOpen: false, itemToEdit: undefined });

  addItemModalHander = (open) => () => this.setState({ addItemOpen: open });

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
      addItemOpen,
      editItemOpen,
      itemToEdit,
    } = this.state;

    const renderShopListMenu = system[TYPES.LISTS_DOWNLOADED];
    const currentListName = shoppinglistsList.length > 0
      ? shoppinglistsList[shoppinglistsMenuIndex].listName : '';
    const selItemList = renderShopListMenu
      ? shoppinglistsList[shoppinglistsMenuIndex].items : [];
    const selItem = selItemList[itemToEdit];

    return (
      <Div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Tooltip title="Available Lists">
              <Button
                aria-haspopup="true"
                onClick={this.handleShoppinglistsMenuOpen}
              >
                <Typography variant="h6">
                  {currentListName}
                </Typography>
                <ArrowDropDown />
              </Button>
            </Tooltip>
          </Toolbar>
        </AppBar>
        <Paper className={classes.paper}>
          <EnhancedTable
            editItemHandler={this.editItemModalOpen}
            addItemHandler={this.addItemModalHander(true)}
            rowStructure={rowStructure}
            data={selItemList}
          />
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
        <AddItemModal
          open={addItemOpen}
          onClose={this.addItemModalHander(false)}
        />
        <EditItemModal
          open={editItemOpen}
          onClose={this.editItemModalHandler}
          itemToEdit={selItem}
        />
      </Div>
    );
  }
}

MyShoppingLists.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  system: PropTypes.shape({}).isRequired,
  lists: PropTypes.shape({}).isRequired,
};

const mapStateToProps = (state) => {
  const { system, lists } = state;
  return { system, lists };
};

export default connect(mapStateToProps)(withStyles(styles)(MyShoppingLists));
