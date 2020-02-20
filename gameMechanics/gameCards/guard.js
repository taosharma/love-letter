const { Card } = require("./card.js");
const { discardCard }

class Guard extends Card {
  constructor() {
    super("Guard", 1);
    this.action = function playGuard(
      playerHand,
      opponentHand,
      playerDiscard,
      opponentDiscard,
      gameDeck
    ) {
      //This function resolves the Guard card action. It lets a player guess the card in their opponents hand. If they guess correctly, their opponent discards the card and is out of the game.
      const playerGuess = "Baron"; //prompt("Guess your opponent's card.").value;
      // if (playerGuess === Guard.type) {
      //   playerGuess = prompt("Cannot guess guard. Try again.").value;
      // }
      if (playerGuess === opponentHand[0].name) {
        return discardCard(opponentHand, opponentDiscard);
      } else return;
    };
  }
}

module.exports = {
  Guard
};
