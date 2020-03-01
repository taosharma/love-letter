const { Card } = require("./Card.js");

class King extends Card {
  constructor() {
    super("King", 6);
    this.action = function playKing(
      playerHand,
      opponentHand,
      playerDiscard,
      opponentDiscard,
      gameDeck
    ) {
      // This function resolves the King card action. The player swaps their hand with their opponent.
      playerHand.push(opponentHand[0]);
      opponentHand.push(playerHand[0]);
      playerHand.splice(0, 1);
      opponentHand.splice(0, 1);
    };
  }
}

module.exports = {
  King
};
