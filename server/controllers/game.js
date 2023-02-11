import axios from 'axios';

import Deck from '../models/deck.js';
import Player from '../models/player.js';

let gameInProgress = false;
let currentDeck = [];
let player;
let dealer;

export const startGame = async (req, res) => {
  // if (gameInProgress) {
  //   return res.status(400).json({
  //     message: 'A game is already in progress.'
  //   });
  // }
  
  gameInProgress = true;
  currentDeck = new Deck();

  await currentDeck.createDeck();

  player = new Player('Player', currentDeck.cards.splice(0, 2));
  dealer = new Player('Dealer', currentDeck.cards.splice(0, 2));

  res.status(200).json({
    playerCards: player.cards,
    dealerCards: [dealer.cards[0]],
    playerTotal: player.total
  });
}

export const hit = async (req, res) => {
  await player.addCard(currentDeck.id);

  if (player.total > 21) {
    gameInProgress = false;

    // dealer automatically wins
    return res.status(200).json({
      message: 'You have busted.',
      playerCards: player.cards,
      dealerCards: dealer.cards,
      playerTotal: player.total
    });
  }
  
  // the game continues
  res.status(200).json({
    playerCards: player.cards,
    dealerCards: [dealer.cards[0]],
    playerTotal: player.total
  });
}

export const stand = async (req, res) => {
  if (!gameInProgress) {
    return res.status(400).json({
      message: 'No game in progress.'
    });
  }
  
  while (dealer.total < 17) {
    await dealer.addCard(currentDeck.id);
  }

  if (dealer.total > 21) {
    gameInProgress = false;
    
    // player automatically wins
    return res.status(200).json({
      message: 'Dealer has busted.',
      playerCards: player.cards,
      dealerCards: dealer.cards,
      playerTotal: player.total
    });
  }
  
  gameInProgress = false;
  
  if (dealer.total > player.total) {
    return res.status(200).json({
      message: 'Dealer wins.',
      playerCards: player.cards,
      dealerCards: dealer.cards,
      playerTotal: player.total
    });
  }

  // in case when player.total < dealer.total, player wins
  return res.status(200).json({
    message: 'You win.',
    playerCards: player.cards,
    dealerCards: dealer.cards,
    playerTotal: player.total
  });
}
