import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  DialogContent,
  DialogActions,
  DialogContentText,
  DialogTitle,
  Dialog,
  TextField,
  Button,
} from '@material-ui/core';

const styles = theme => ({

});

const NewCompetitorModal = (props) => {
  const {
    open,
    onClose,
  } = props;
  return (
    <Dialog
      open={open}
      onClose={onClose}
      disableBackdropClick
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">New Competitor</DialogTitle>
      <DialogContent>
        <DialogContentText color="textPrimary">
          Name
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Competitor's name"
          type="text"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onClose} color="primary">
          Create New Competitor
        </Button>
      </DialogActions>
    </Dialog>
  );
};

NewCompetitorModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default withStyles(styles)(NewCompetitorModal);
