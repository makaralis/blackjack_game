import axios from 'axios';
class Player {
  constructor(name, cards) {
    this.name = name;
    this.cards = cards;
    this.total = cards.reduce((acc, card) => acc + card.value, 0);
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

  async addCard(deckId) {
    try {
      const res = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
  
      this.cards.push(res.data.cards[0]);
      // updating the values for the cards
      this.updateFaceCardValues();
      // updating total value for the player
      this.total = this.cards.reduce((acc, card) => acc + card.value, 0);;
    }
    catch (e) {
      console.log(e);
    }
  }
}
  
export default Player;
  