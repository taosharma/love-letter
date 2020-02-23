const { Card } = require("./card.js");
const { discardCard } = require("../gameFunctions/discardCard.js");
// const { drawCard } = require("../gameFunctions/drawCard.js");

class Prince extends Card {
  constructor() {
    super("Prince", 5);
    this.action = function playPrince(
      playerHand,
      opponentHand,
      playerDiscard,
      opponentDiscard,
      gameDeck
    ) {
      // This function resolves the Prince card action. When the Prince is played, the player's opponent is forced to discard their card and draw a new card from the game deck.
      // discardCard(opponentHand, opponentDiscard);
      // drawCard(opponentHand, gameDeck);
    };
  }
}

module.exports = {
  Prince
};
