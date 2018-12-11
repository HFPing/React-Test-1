import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
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

const Div = styled.div`
  height: 100%;
  display: flex;
`;

const styles = theme => ({
  card: {
    width: '100%',
    margin: theme.spacing.unit * 3,
  },
});

class MyShoppingLists extends PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <Div>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Word of the Day
            </Typography>
          </CardContent>
        </Card>
      </Div>
    );
  }
}

const mapStateToProps = (state) => {
  const { system, lists } = state;
  return { system, lists };
};

export default connect(mapStateToProps)(withStyles(styles)(MyShoppingLists));
