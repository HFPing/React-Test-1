import React from 'react';
import PropTypes from 'prop-types';
import ScrollMenu from 'react-horizontal-scrolling-menu';
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
  AddCircleOutline,
  ArrowBack,
  ArrowForward,
} from '@material-ui/icons';

import './CompetitorsList.css';

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
    width: 250,
    minHeight: 250,
    margin: theme.spacing.unit * 4,
  },
  content: {
    flexDirection: 'column',
    paddingBottom: 0,
  },
});

/*
const AddNewCard = (classes, key) => (
  <Card className={classes.cardContent} key={key}>
    <Typography variant="h2" className={classes.mediaNew}>
      <AddCircleOutline fontSize="inherit" />
    </Typography>
    <CardContent>
      <Typography gutterBottom variant="h4">
        {' '}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" color="primary">
        <b>Add New</b>
      </Button>
    </CardActions>
  </Card>
);
*/

const ListComponent = (list, classes) => list.map(comp => (
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
));

const CompetitorsList = ({ competitorsList, classes }) => {
  const data = ListComponent(competitorsList, classes);
  // data.push(AddNewCard(classes, 'New'));
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Typography variant="h5" color="inherit">
          My Competitors
        </Typography>
        <Button color="primary" variant="contained" style={{ marginLeft: 16 }}>
          + Add New
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

CompetitorsList.propTypes = {
  competitorsList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(CompetitorsList);
