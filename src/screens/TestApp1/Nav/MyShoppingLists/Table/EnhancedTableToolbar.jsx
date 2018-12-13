import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { lighten, fade } from '@material-ui/core/styles/colorManipulator';
import {
  IconButton,
  Toolbar,
  Typography,
  Tooltip,
  Button,
  InputBase,
} from '@material-ui/core';
import {
  Delete,
  FilterList,
  Search,
  MoreVert,
} from '@material-ui/icons';

const toolbarStyles = theme => ({
  root: {
    padding: theme.spacing.unit * 4,
  },
  highlight: {
    color: theme.palette.primary.main,
    backgroundColor: lighten(theme.palette.primary.light, 0.85),
  },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    color: theme.palette.text.secondary,
  },
  title: {
    flex: '0 0 auto',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius * 6,
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: fade(theme.palette.grey[400], 0.25),
    },
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: theme.palette.grey[400],
    marginRight: theme.spacing.unit * 4,
    width: '100%',
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'action',
    width: '100%',
    height: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 8,
    transition: theme.transitions.create('width'),
    width: 120,
    '&:focus': { width: 200 },
  },
});

const EnhancedTableToolbar = props => {
  const { numSelected, classes } = props;

  return (
    <Toolbar
      className={classNames(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      <div className={classes.title}>
        {numSelected > 0 ? (
          <Typography color="inherit" variant="subtitle1">
            {`${numSelected} selected`}
          </Typography>
        ) : (
          <div>
            <Button
              color="primary"
              variant="contained"
              onClick={() => console.log('Add new item')}
            >
              + Add New Item
            </Button>
          </div>
        )}
      </div>
      <div className={classes.spacer} />
      <div className={classes.actions}>
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton aria-label="Delete">
              <Delete color="error" />
            </IconButton>
          </Tooltip>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Tooltip title="Search Item">
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <Search color="action" />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                />
              </div>
            </Tooltip>
            <Tooltip title="Filter list">
              <IconButton aria-label="Filter list">
                <FilterList />
              </IconButton>
            </Tooltip>
            <Tooltip title="More">
              <IconButton aria-label="Filter list">
                <MoreVert />
              </IconButton>
            </Tooltip>
          </div>
        )}
      </div>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  numSelected: PropTypes.number.isRequired,
};

export default withStyles(toolbarStyles)(EnhancedTableToolbar);
