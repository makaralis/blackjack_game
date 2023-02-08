class Player {
  constructor(name, cards) {
    this.name = name;
    this.cards = cards;
    this.total = cards.reduce((acc, card) => acc + card.value, 0);
  }

  addCard(card) {
    this.cards.push(card);
    this.total += card.value;
  }

  resetHand() {
    this.cards = [];
    this.total = 0;
  }
}
  
export default Player;
  