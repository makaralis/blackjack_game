import axios from 'axios';

class Deck {
  constructor() {
    this.id = 0;
    this.cards = [];
  }

  updateFaceCardValues() {
    this.cards.forEach(card => {
      if (
        card.value === "QUEEN" ||
        card.value === "KING" ||
        card.value === "JACK"
      ) {
        card.face = card.value;
        card.value = 10;
      } else if (card.value === "ACE") {
        card.face = "ACE";
        card.value = 11;
      } else {
        card.value = parseInt(card.value);
      }
    });
  };

  async createDeck() {
    try {
      // creating new deck with all of the cards
      const res = await axios.get("https://www.deckofcardsapi.com/api/deck/new/draw/?count=52");

      this.id = res.data.deck_id;
      this.cards = res.data.cards;
      this.updateFaceCardValues();
    }
    catch (e) {
      console.log(e);
    }
  }
}

export default Deck;
