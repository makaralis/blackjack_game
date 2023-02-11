import React from "react";
import { Modal, Button, Typography } from '@material-ui/core';


const InGameModal = ({ open, handleClose, message }) => {
    return (
      <Modal open={open}  onClose={handleClose}>
        <div>
          <Typography>{message}</Typography>
          <Button onClick={handleClose}>NEXT HAND</Button>
        </div>
      </Modal>
    );
}

export default InGameModal;
