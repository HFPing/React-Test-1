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

const EditItemModal = (props) => {
  const {
    open,
    onClose,
    itemToEdit,
  } = props;
  let returnObj = {
    itmName: 'Test',
    upc: 0,
  };
  const setData = () => {

  };
  return (
    <Dialog
      open={open}
      onClose={onClose()}
      disableBackdropClick
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Edit Item</DialogTitle>
      <DialogContent>
        <DialogContentText color="textPrimary">
          Name
        </DialogContentText>
        <TextField
          autoFocus
          defaultValue={itemToEdit.itmName}
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
          defaultValue={itemToEdit.upc}
          margin="dense"
          id="name"
          label="Item Barcode"
          type="text"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose()} color="primary">
          Cancel
        </Button>
        <Button onClick={onClose(returnObj)} color="primary">
          Add Item to List
        </Button>
      </DialogActions>
    </Dialog>
  );
};

EditItemModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  itemToEdit: PropTypes.shape({}),
};

EditItemModal.defaultProps = {
  itemToEdit: {
    index: 0,
    itmName: 'Test',
    upc: 0,
  },
};

export default withStyles(styles)(EditItemModal);
