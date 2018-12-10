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

const NewShoppinglistModal = (props) => {
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
      <DialogTitle id="form-dialog-title">New Shopping List</DialogTitle>
      <DialogContent>
        <DialogContentText color="textPrimary">
          Name
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="List name"
          type="text"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onClose} color="primary">
          Create New List
        </Button>
      </DialogActions>
    </Dialog>
  );
};

NewShoppinglistModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default withStyles(styles)(NewShoppinglistModal);
