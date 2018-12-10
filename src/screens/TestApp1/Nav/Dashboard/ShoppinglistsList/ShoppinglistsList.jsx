import React from 'react';
import PropTypes from 'prop-types';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from '@material-ui/core';
import {
  ArrowBack,
  ArrowForward,
} from '@material-ui/icons';

import './ShoppinglistsList.css';

const styles = theme => ({
  cardContent: {
    minWidth: 150,
    maxWidth: 300,
    margin: theme.spacing.unit * 4,
  },
  content: {
    flexDirection: 'column',
  },
});

const ListComponent = (list, classes) => list.map(el => (
  <Card className={classes.cardContent} key={el.listName}>
    <CardContent className={classes.content}>
      <Typography component="h5" variant="h5" className="wrap-text">
        {el.listName}
      </Typography>
      <Typography variant="caption">
        Number of items:
        {el.items.length}
      </Typography>
      <Typography variant="body1" className="wrap-text">
        Some description or note to indicate what this list is about
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" color="primary">
        More Info
      </Button>
    </CardActions>
  </Card>
));

const ShoppinglistsList = ({ shoppinglistsList, classes }) => {
  const data = ListComponent(shoppinglistsList, classes);
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Typography variant="h5" color="inherit">
          My Shopping Lists
        </Typography>
        <Button color="primary" variant="contained" style={{ marginLeft: 16 }}>
          + Create New
        </Button>
      </div>
      <ScrollMenu
        data={data}
        transition={0.3}
        arrowLeft={<ArrowBack fontSize="large" />}
        arrowRight={<ArrowForward fontSize="large" />}
        onSelect={null}
      />
    </div>
  );
};

ShoppinglistsList.propTypes = {
  shoppinglistsList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(ShoppinglistsList);
