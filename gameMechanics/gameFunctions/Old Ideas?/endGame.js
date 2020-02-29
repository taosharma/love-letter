//This function ends the game when a player has no cards in their hand and tries to draw a card.

function endGame() {
  if (player1Hand == []) {
    console.log("Player 2 wins!");
  }

  if (player2Hand == []) {
    console.log("Player 1 wins!");
  }
}

module.exports = {
  endGame
};
