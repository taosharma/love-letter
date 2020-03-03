const { Card } = require("./Card.js");

/* This function resolves the Priest card action. When the Priest is played, the player told what card their opponent
has in their hand. */

class Priest extends Card {
  constructor() {
    super("Priest", 2);
    this.action = function playPriest(player, target) {};
  }
}

module.exports = {
  Priest
};
