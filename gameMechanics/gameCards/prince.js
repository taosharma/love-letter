const { Card } = require("./Card.js");

/* This function resolves the Prince card action. When the Prince is played, the player's opponent is forced to 
discard their card and draw a new card from the game deck. */

class Prince extends Card {
  constructor() {
    super("Prince", 5);
    this.action = function playPrince(player, target, deck) {
      if (target.protected === true) {
        return;
      }
      target.discardCard();
      target.drawCard(deck);
    };
  }
}

module.exports = {
  Prince
};
