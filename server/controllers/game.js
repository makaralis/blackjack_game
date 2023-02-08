import Deck from '../models/deck.js';
import Player from '../models/player.js';

let gameInProgress = false;
let currentDeck = [];
let player;
let dealer;

export const startGame = async (req, res) => {
  if (gameInProgress) {
    return res.status(400).json({
      message: 'A game is already in progress.'
    });
  }
  
  gameInProgress = true;
  currentDeck = new Deck();
  currentDeck.createDeck();

  player = new Player('Player', currentDeck.deck.splice(0, 2));
  dealer = new Player('Dealer', currentDeck.deck.splice(0, 2));

  res.status(200).json({
    message: 'Game started.',
    playerCards: player.cards,
    dealerCards: [dealer.cards[0]],
  });
}

export const hit = async (req, res) => {
  if (player.total > 21) {
    gameInProgress = false;

    return res.status(200).json({
      message: 'You have busted.',
      playerCards: player.cards,
      dealerCards: dealer.cards,
    });
  }
  
  res.status(200).json({
    message: 'You have taken a hit.',
    playerCards: player.cards,
    dealerCards: [dealer.cards[0]],
  });
}

export const stand = async (req, res) => {
  if (!gameInProgress) {
    return res.status(400).json({
      message: 'No game in progress.'
    });
  }
  
  while (dealer.total < 17) {
    dealer.hit(currentDeck.deck.splice(0, 1));
  }

  if (dealer.total > 21) {
    gameInProgress = false;
    
    return res.status(200).json({
      message: 'Dealer has busted.',
      playerCards: player.cards,
      dealerCards: dealer.cards,
    });
  }
  
  gameInProgress = false;
  
  if (dealer.total > player.total) {
    return res.status(200).json({
      message: 'Dealer wins.',
      playerCards: player.cards,
      dealerCards: dealer.cards,
    });
  }

  return res.status(200).json({
    message: 'You win.',
    playerCards: player.cards,
    dealerCards: dealer.cards,
  });
}
