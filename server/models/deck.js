const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
const faces = ['ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king'];

class Deck {
  constructor() {
    this.deck = [];
    this.dealtCards = [];
    this.createDeck();
    this.shuffleDeck();
  }

  createDeck() {
    for (const suit of suits) {
      for (const face of faces) {
        let value;
  
        if (typeof face === 'number') {
          value = face;
        } else if (face === 'ace') {
          value = 11;
        } else {
          value = 10;
        }
  
        this.deck.push({
          suit,
          face,
          value,
        });
      }
    }
  }

  shuffleDeck() {
    for (let i = this.deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
    }
  }

  dealCard() {
    let dealtCard = this.deck.pop();
    this.dealtCards.push(dealtCard);

    return dealtCard;
  }
}

export default Deck;
