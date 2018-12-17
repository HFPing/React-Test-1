import React from 'react';
import PropTypes from 'prop-types';
import {
  TableHead,
  TableRow,
  TableCell,
  Checkbox,
  Tooltip,
  TableSortLabel,
  Typography,
} from '@material-ui/core';
import {
  CheckBoxOutlineBlankOutlined,
} from '@material-ui/icons';

const createSortHandler = (property, onRequestSort) => event => {
  onRequestSort(event, property);
};

/**
 * Table Header
 * - Category orginizer
 * - Category asc/dec filter
 * - rowStructure indicates data to be here
 */
const EnhancedTableHead = ({
  onSelectAllClick,
  order,
  orderBy,
  numSelected,
  rowCount,
  onRequestSort,
  rowStructure,
}) => (
  <TableHead>
    <TableRow>
      <TableCell padding="checkbox">
        <Checkbox
          // indeterminate={numSelected > 0 && numSelected < rowCount}
          checked={numSelected === rowCount && rowCount > 0}
          onChange={onSelectAllClick}
          color="primary"
          icon={<CheckBoxOutlineBlankOutlined color="disabled" />}
        />
      </TableCell>
      {rowStructure.map(row => (
        <TableCell
          key={row.id}
          align={row.numeric ? 'right' : 'left'}
          padding={row.disablePadding ? 'none' : 'default'}
          sortDirection={orderBy === row.id ? order : false}
        >
          <Tooltip
            title="Sort"
            placement={row.numeric ? 'bottom-end' : 'bottom-start'}
            enterDelay={300}
          >
            <TableSortLabel
              active={orderBy === row.id}
              direction={order}
              onClick={createSortHandler(row.id, onRequestSort)}
            >
              <Typography variant="subtitle1" color="textPrimary">
                <b>{row.label}</b>
              </Typography>
            </TableSortLabel>
          </Tooltip>
        </TableCell>
      ), this)}
    </TableRow>
  </TableHead>
);

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
  rowStructure: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      numeric: PropTypes.bool,
      disablePadding: PropTypes.bool,
    }),
  ).isRequired,
};

export default EnhancedTableHead;
