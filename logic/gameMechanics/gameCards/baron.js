const { Card } = require("./Card.js");

/* This function resolves the Baron card action. It lets a player compare the value of the remaining card in their 
hand with the value of the card in their opponent's hand. Whichever player has the lower value discards their card 
and is out of the game. If they are equal both the player and their opponent keep their cards, but now know what 
cards each other have. */

class Baron extends Card {
  constructor() {
    super("Baron", 3);
    this.action = function playBaron(player, target) {
      if (target.protected === true) {
        console.log(
          `Player ${player.id} plays a Baron, but Player ${target.id} is protected.`
        );
        return;
      }

      if (player.hand[0].value > target.hand[0].value) {
        console.log(
          `Player ${player.id} plays a Baron. The ${player.hand[0].type} in their hand has a greater value than the ${target.hand[0].type} in Player ${target.id}'s hand. Player ${target.id} must discard their hand`
        );
        target.discardCard();
        target.setStatus("inactive");
        return;
      }
      if (player.hand[0].value < target.hand[0].value) {
        console.log(
          `Player ${player.id} plays a Baron. The ${player.hand[0].type} in their hand has a lesser value than the ${target.hand[0].type} in Player ${target.id}'s hand. Player ${player.id} must discard their hand`
        );
        player.discardCard();
        player.setStatus("inactive");
        return;
      }
    };
  }
}

module.exports = {
  Baron
};
