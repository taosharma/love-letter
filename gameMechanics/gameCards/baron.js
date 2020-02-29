const { Card } = require("./card.js");
const { discardCard } = require("../gameFunctions/Old Ideas?/discardCard.js");

class Baron extends Card {
  constructor() {
    super("Baron", 3);
    this.action = function playBaron(
      playerHand,
      opponentHand,
      playerDiscard,
      opponentDiscard,
      gameDeck
    ) {
      //This function resolves the Baron card action. It lets a player compare the value of the remaining card in their hand with the value of the card in their opponent's hand. Whichever player has the lower value discards their card and is out of the game. If they are equal both the player and their opponent keep their cards, but now know what cards each other have.
      if (playerHand[0].value > opponentHand[0].value) {
        return discardCard(opponentHand, opponentDiscard);
      }
      if (playerHand[0].value < opponentHand[0].value) {
        return discardCard(playerHand, playerDiscard);
      }
    };
  }
}

module.exports = {
  Baron
};
