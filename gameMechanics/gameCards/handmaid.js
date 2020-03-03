const { Card } = require("./Card.js");

//Semantic warning to let opponent know that the player has protected themself until their next turn.

class Handmaid extends Card {
  constructor() {
    super("Handmaid", 4);
    this.action = function playHandmaid(player, target) {
      player.protected = true;
    };
  }
}

module.exports = {
  Handmaid
};
