import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
} from '@material-ui/core';

const Div = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const styles = theme => ({
  root: {
    backgroundColor: 'red',
  },
});

class MyShoppingLists extends PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <Div>
        <Typography paragraph>
          My Shopping Lists
        </Typography>
      </Div>
    );
  }
}

const mapStateToProps = (state) => {
  const { system, lists } = state;
  return { system, lists };
};

export default connect(mapStateToProps)(withStyles(styles)(MyShoppingLists));
