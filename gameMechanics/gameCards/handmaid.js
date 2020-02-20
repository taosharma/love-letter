const { Card } = require("./card.js");

class Handmaid extends Card {
  constructor() {
    super("Handmaid", 4);
    this.action = function playHandmaid(
      playerHand,
      opponentHand,
      playerDiscard,
      opponentDiscard,
      gameDeck
    ) {
      //Semantic warning to let opponent know that the player has protected themself until their next turn.
      return alert("Protected by Handmaid until next turn.");
    };
  }
}

module.exports = {
  Handmaid
};
