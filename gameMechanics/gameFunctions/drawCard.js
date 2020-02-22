//This function lets the player take a card from the deck, put it into their hand, and updates the deck accordingly.

function drawCard(playerHands, deckOfCards) {
  playerHands[turn] += deckOfCards.pop();
  return playerHands, deckOfCards;
}

module.exports = {
  drawCard
};
