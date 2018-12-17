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

const AddItemModal = (props) => {
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
      <DialogTitle id="form-dialog-title">Add New Item</DialogTitle>
      <DialogContent>
        <DialogContentText color="textPrimary">
          Name
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Item Name"
          type="text"
          fullWidth
        />
        <DialogContentText color="textPrimary">
          SKU #
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Item SKU"
          type="text"
          fullWidth
        />
        <DialogContentText color="textPrimary">
          UPC
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Item Barcode"
          type="text"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onClose} color="primary">
          Add Item to List
        </Button>
      </DialogActions>
    </Dialog>
  );
};

AddItemModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default withStyles(styles)(AddItemModal);
