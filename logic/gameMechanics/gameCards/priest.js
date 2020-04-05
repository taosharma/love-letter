const { Card } = require("./Card.js");

/* This function resolves the Priest card action. When the Priest is played, the player told what card their opponent
has in their hand. */

class Priest extends Card {
  constructor() {
    super("Priest", 2);
    this.action = function playPriest(player, target) {
      console.log(
        `Player ${player.id} plays a Priest, and sees that Player ${
          target.id
        } has a ${target.showHandString()}.`
      );
    };
  }
}

module.exports = {
  Priest
};
