import React from 'react';
import { Modal, Button, Typography, List, ListItem } from '@material-ui/core';

import { useStyles } from '../styles/welcomeModal';

const WelcomeModal = ({ open, handleClose }) => {
  const classes = useStyles();
  const modalListText = [
    'Beat the dealer by getting as close to 21 as possible without going over',
    'Dealer must hit on soft 17',
    'Face cards are worth 10',
    'Aces can be worth 1 or 11'
  ];

  const body = (
    <div className={classes.paper}>
        <Typography variant='h2' className={classes.title}>Rules of the BlackJack 😈</Typography>
        <List component="nav">
            {modalListText.map((text,id) => 
                <ListItem key={id}>
                    <Typography variant='h5'>{'- ' + text}</Typography>
                </ListItem>)
            }
        </List>
        <div style={{alignItems: 'end'}}>
        <Button variant="contained" color="primary" onClick={handleClose} className={classes.submitButton}>
            I understood, lets start the game!
        </Button>
        </div>
    </div>
  );

  return (
    <Modal
        open={open}
        onClose={handleClose}
    >
        {body}
    </Modal>
  );
}

export default WelcomeModal;