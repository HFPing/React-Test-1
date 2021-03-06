import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  TableCell,
  Table,
  TableBody,
  TableRow,
  Checkbox,
  TablePagination,
  Tooltip,
  IconButton,
} from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';
import {
  CheckBoxOutlineBlankOutlined,
  Edit,
} from '@material-ui/icons';

import EnhancedTableToolbar from './EnhancedTableToolbar';
import EnhancedTableHead from './EnhancedTableHead';

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) return -1;
  if (b[orderBy] > a[orderBy]) return 1;
  return 0;
}

const getSorting = (order, orderBy) => (
  order === 'desc'
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy));

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

const styles = theme => ({
  tableWrapper: {
    overflowX: 'auto',
  },
  caption: { color: theme.palette.text.primary },
  input: {
    color: theme.palette.text.primary,
    fontSize: 'inherit',
    flexShrink: 0,
  },
  evenCell: {
    backgroundColor: theme.palette.grey[200],
    '&:hover': {
      backgroundColor: fade(theme.palette.secondary.main, 0.25),
    },
  },
  oddCell: {
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: fade(theme.palette.secondary.main, 0.25),
    },
  },
  selectedCell: {
    backgroundColor: fade(theme.palette.primary.main, 0.5),
  },
  editIcon: {
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
});

class EnhancedTable extends PureComponent {
  state = {
    order: 'asc',
    orderBy: '',
    selected: [], // Array of selected item indexes
    page: 0,
    rowsPerPage: 10,
    textFilter: '',
  };

  onTextFilter =
    (e) => this.setState({
      textFilter: e.target.value !== undefined
        ? e.target.value : '',
    });

  handleRequestSort = (event, property) => {
    const { orderBy, order } = this.state;
    const orderByProp = property;
    let orderVar = 'desc';

    if (orderBy === property && order === 'desc') orderVar = 'asc';

    this.setState({ order: orderVar, orderBy: orderByProp });
  };

  handleSelectAllClick = data => event => {
    if (event.target.checked) {
      this.setState({ selected: data.map(n => n.index) });
      return;
    }
    this.setState({ selected: [] });
  };

  handleChangePage =
    (event, page) => this.setState({ page });

  handleChangeRowsPerPage =
    event => this.setState({ rowsPerPage: event.target.value });

  // eslint-disable-next-line
  isSelected = id => this.state.selected.indexOf(id) !== -1;

  handleClick = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    this.setState({ selected: newSelected });
  };

  render() {
    const {
      classes,
      rowStructure,
      data,
      addItemHandler,
      editItemHandler,
    } = this.props;
    const {
      order,
      orderBy,
      selected,
      rowsPerPage,
      page,
      textFilter,
    } = this.state;
    const emptyRows = rowsPerPage
    - Math.min(rowsPerPage, data.length - page * rowsPerPage);
    const paginationStyles = {
      caption: classes.caption,
      input: classes.input,
    };
    const filteredData = data.filter(i => i.itmName.indexOf(textFilter) > -1);

    return (
      <div>
        <EnhancedTableToolbar
          numSelected={selected.length}
          onTextFilter={this.onTextFilter}
          textFilter={textFilter}
          addItemHandler={addItemHandler}
        />
        <div className={classes.tableWrapper}>
          <Table aria-labelledby="tableTitle">
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={this.handleSelectAllClick(filteredData)}
              onRequestSort={this.handleRequestSort}
              rowCount={filteredData.length}
              rowStructure={rowStructure}
            />
            <TableBody>
              {stableSort(filteredData, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((n, idx) => {
                  const isSelected = this.isSelected(n.index);
                  const cellStyle = isSelected
                    ? { root: classes.selectedCell }
                    : idx % 2
                      ? { root: classes.evenCell }
                      : { root: classes.oddCell };
                  return (
                    <TableRow
                      classes={cellStyle}
                      role="checkbox"
                      aria-checked={isSelected}
                      tabIndex={-1}
                      key={n.index}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isSelected}
                          onChange={event => this.handleClick(event, n.index)}
                          color="primary"
                          icon={<CheckBoxOutlineBlankOutlined color="disabled" />}
                        />
                      </TableCell>
                      <TableCell component="th" scope="row" padding="none">
                        {n.itmName}
                      </TableCell>
                      <TableCell align="center">n.sku</TableCell>
                      <TableCell align="center">{n.upc}</TableCell>
                      <TableCell align="right">n.storePrice</TableCell>
                      <TableCell>
                        <Tooltip title="Edit Item">
                          <IconButton onClick={editItemHandler(n.index)}>
                            <Edit color="action" className={classes.editIcon} />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
            'color': 'default', // eslint-disable-line
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
            'color': 'default', // eslint-disable-line
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
          classes={paginationStyles}
        />
      </div>
    );
  }
}

EnhancedTable.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  rowStructure: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      numeric: PropTypes.bool,
      disablePadding: PropTypes.bool,
    }),
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  addItemHandler: PropTypes.func.isRequired,
  editItemHandler: PropTypes.func.isRequired,
};

export default withStyles(styles)(EnhancedTable);
