const { Card } = require("./card.js");

class Countess extends Card {
  constructor() {
    super("Countess", 7);
    this.action = function playCountess(
      playerHand,
      opponentHand,
      playerDiscard,
      opponentDiscard,
      gameDeck
    ) {
      // This function resolves the Countess card action. The Countess does nothing when played.
    };
  }
}

module.exports = {
  Countess
};
