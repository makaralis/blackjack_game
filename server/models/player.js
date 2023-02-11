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
}
  
export default Player;
  