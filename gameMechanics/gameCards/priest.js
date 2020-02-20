const { Card } = require("./card.js");

class Priest extends Card {
  constructor() {
    super("Priest", 2);
    this.action = function playPriest(
      playerHand,
      opponentHand,
      playerDiscard,
      opponentDiscard,
      gameDeck
    ) {
      // This function resolves the Priest card action. When the Priest is played, the player told what card their opponent has in their hand.
      return prompt(`${opponentHand[0]}`);
    };
  }
}

module.exports = {
  Priest
};
