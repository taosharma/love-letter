//This function lets the player take a card from the deck, put it into their hand, and updates the deck accordingly.

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function drawCard(playerHand, gameDeck) {
  const drawnCardNumber = getRandomInt(gameDeck.length);
  const drawnCard = gameDeck[drawnCardNumber];
  playerHand.push(drawnCard);
  gameDeck.splice(drawnCardNumber, 1);
  return playerHand, gameDeck;
}

module.exports = {
  drawCard
};
