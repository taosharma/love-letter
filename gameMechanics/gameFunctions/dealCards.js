const { drawCard } = require("./drawCard.js");

//Function to deal one card to each player from the deck.

function dealCards() {
  drawCard(player1Hand);
  drawCard(player2Hand);
}

module.exports = {
  dealCards
};
