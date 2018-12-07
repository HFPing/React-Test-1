import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  List,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Button,
} from '@material-ui/core';
import { Search, AddCircleOutline } from '@material-ui/icons';

import './CompetitorsList.css';

const styles = theme => ({
  cardContent: {
    minWidth: 250,
    width: 250,
    minHeight: 250,
    height: 250,
    marginRight: theme.spacing.unit * 4,
  },
  media: {
    height: 150,
    paddingTop: '56.25%', // 16:9
  },
  mediaNew: {
    height: 150,
    backgroundColor: '#EBEBEB',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actions: {
    height: '50%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'space-between',
  },
});

const AddNewCard = ({ classes }) => (
  <Card className={classes.cardContent}>
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

const CompetitorsList = ({ competitorsList, classes }) => (
  <div>
    <Typography variant="h5" color="inherit">
      My Competitors
    </Typography>
    <List className="list">
      {competitorsList.map(comp => (
        <Card className={classes.cardContent} key={comp.compName}>
          <CardMedia
            className={classes.media}
            image={`https://picsum.photos/480/640?image=${Math.floor(Math.random() * 200)}`}
            title="Paella dish"
          />
          <CardContent className={classes.actions}>
            <Typography gutterBottom variant="h6">
              {comp.compName}
            </Typography>
            <IconButton aria-label="Search">
              <Search />
            </IconButton>
          </CardContent>
        </Card>
      ))}
      <AddNewCard classes={classes} />
    </List>
  </div>
);

CompetitorsList.propTypes = {
  competitorsList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(CompetitorsList);
