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

const rows = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Dessert (100g serving)' },
  { id: 'calories', numeric: true, disablePadding: false, label: 'Calories' },
  { id: 'fat', numeric: true, disablePadding: false, label: 'Fat (g)' },
  { id: 'carbs', numeric: true, disablePadding: false, label: 'Carbs (g)' },
  { id: 'protein', numeric: true, disablePadding: false, label: 'Protein (g)' },
];

const createSortHandler = (property, onRequestSort) => event => {
  onRequestSort(event, property);
};

const EnhancedTableHead = ({
  onSelectAllClick,
  order,
  orderBy,
  numSelected,
  rowCount,
  onRequestSort,
}) => (
  <TableHead>
    <TableRow>
      <TableCell padding="checkbox">
        <Checkbox
          indeterminate={numSelected > 0 && numSelected < rowCount}
          checked={numSelected === rowCount}
          onChange={onSelectAllClick}
          color="primary"
          icon={<CheckBoxOutlineBlankOutlined color="disabled" />}
        />
      </TableCell>
      {rows.map(row => (
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
};

export default EnhancedTableHead;
