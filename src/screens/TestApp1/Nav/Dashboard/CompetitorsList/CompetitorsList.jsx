import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Button,
} from '@material-ui/core';
import {
  Search,
  ArrowBack,
  ArrowForward,
} from '@material-ui/icons';

import '../../../../../../node_modules/slick-carousel/slick/slick.css';
import '../../../../../../node_modules/slick-carousel/slick/slick-theme.css';

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
  media: {
    height: 150,
  },
  actions: {
    height: '50%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'space-between',
  },
  cardContent: {
    minWidth: 250,
    maxWidth: 250,
    minHeight: 250,
    margin: theme.spacing.unit * 4,
  },
  content: {
    flexDirection: 'column',
    paddingBottom: 0,
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

const CompetitorsList = ({
  competitorsList,
  classes,
  newCompModalHandler,
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
          My Competitors
        </Typography>
        <Button
          color="primary"
          variant="contained"
          style={{ marginLeft: 16 }}
          onClick={newCompModalHandler}
        >
          + Add New
        </Button>
      </div>
      <Slider {...settings}>
        {competitorsList.map(comp => (
          <Card className={classes.cardContent} key={comp.compName}>
            <CardMedia
              className={classes.media}
              image={`https://picsum.photos/480/640?image=${Math.floor(Math.random() * 200)}`}
              title="Paella dish"
            />
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5" className="wrap-text">
                {comp.compName}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Edit Info
              </Button>
              <IconButton aria-label="Search">
                <Search />
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </Slider>
    </div>
  );
};

CompetitorsList.propTypes = {
  competitorsList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  classes: PropTypes.shape({}).isRequired,
  newCompModalHandler: PropTypes.func.isRequired,
};

export default withStyles(styles)(CompetitorsList);
