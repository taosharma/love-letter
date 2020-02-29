// This function removes a card from a player's hand and adds it to their discard pile.

function discardCard(playerHand, playerDiscard) {
  playerDiscard.push(playerHand[0]);
  playerHand.splice(0, 1);
}

module.exports = {
    discardCard
  };