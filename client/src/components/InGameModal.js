import React from "react";
import { Modal, Button, Typography } from '@material-ui/core';

import { useStyles } from "../styles/inGameModal";


const InGameModal = ({ open, handleClose, message }) => {
  const classes = useStyles();

  return (
    <Modal open={open} onClose={handleClose}>
      <div className={classes.paper}>
        <Typography variant='h2' className={classes.title}>{message}</Typography>
        <div style={{alignItems: 'end'}}>
          <Button variant="contained" color="primary" onClick={handleClose} className={classes.submitButton}>
          NEXT HAND
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default InGameModal;
