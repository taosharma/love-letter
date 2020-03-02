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
        return;
      }
      console.log(player.showHandString());
      console.log(target.showHandString());
      if (player.hand[0].value > target.hand[0].value) {
        target.discardCard();
      }
      if (player.hand[0].value > target.hand[0].value) {
        player.discardCard();
      }
    };
  }
}

module.exports = {
  Baron
};
