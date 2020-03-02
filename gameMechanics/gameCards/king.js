const { Card } = require("./Card.js");

/* This function resolves the King card action. The player swaps their hand with their opponent. */

class King extends Card {
  constructor() {
    super("King", 6);
    this.action = function playKing(player, target) {
      player.hand.push(target.hand[0]);
      target.hand.push(player.hand[0]);
      player.hand.splice(0, 1);
      target.hand.splice(0, 1);
    };
  }
}

module.exports = {
  King
};
