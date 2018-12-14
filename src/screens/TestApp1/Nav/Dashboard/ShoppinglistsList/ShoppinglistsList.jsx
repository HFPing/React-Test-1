import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  IconButton,
} from '@material-ui/core';
import {
  ArrowBack,
  ArrowForward,
} from '@material-ui/icons';

import '../../../../../../node_modules/slick-carousel/slick/slick-theme.css';
import '../../../../../../node_modules/slick-carousel/slick/slick.css';
import './ShoppinglistsList.css';

const NextArrow = ({ iconClass, onClick }) => (
  <IconButton
    aria-label="Search"
    onClick={onClick}
    style={{ marginLeft: 10 }}
  >
    <ArrowForward color="action" className={iconClass} />
  </IconButton>
);

const PrevArrow = ({ iconClass, onClick }) => (
  <IconButton
    aria-label="Search"
    onClick={onClick}
    style={{ marginRight: 10 }}
  >
    <ArrowBack color="action" className={iconClass} />
  </IconButton>
);

const styles = theme => ({
  cardContent: {
    minWidth: 150,
    maxWidth: 300,
    margin: theme.spacing.unit * 4,
  },
  content: {
    flexDirection: 'column',
  },
  scrollMenuArrow: {
    cursor: 'pointer',
    margin: 0,
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  iconStyle: {
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
});

const ShoppinglistsList = ({
  shoppinglistsList,
  classes,
  newShopLstHandler,
}) => {
  const settings = {
    className: 'slider-class',
    infinite: true,
    speed: 500,
    focusOnSelect: true,
    centerMode: true,
    swipeToSlide: true,
    variableWidth: true,
    adaptiveHeight: true,
    nextArrow: <NextArrow iconClass={classes.iconStyle} />,
    prevArrow: <PrevArrow iconClass={classes.iconStyle} />,
  };
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Typography variant="h5" color="inherit">
          My Shopping Lists
        </Typography>
        <Button
          color="primary"
          variant="contained"
          style={{ marginLeft: 16 }}
          onClick={newShopLstHandler}
        >
          + Create New
        </Button>
      </div>
      <Slider {...settings}>
        {shoppinglistsList.map(el => (
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
        ))}
      </Slider>
    </div>
  );
};

ShoppinglistsList.propTypes = {
  shoppinglistsList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  classes: PropTypes.shape({}).isRequired,
  newShopLstHandler: PropTypes.func.isRequired,
};

export default withStyles(styles)(ShoppinglistsList);
