//This function lets the player play a card by putting it in their discard pile and resolving its action.

function playCard(
  chosenCard,
  playerHand,
  opponentHand,
  playerDiscard,
  opponentDiscard,
  gameDeck
) {
  playerDiscard.push(playerHand[chosenCard]);
  playerHand.splice(chosenCard, 1);
  playerDiscard[playerDiscard.length - 1].action(
    playerHand,
    opponentHand,
    playerDiscard,
    opponentDiscard,
    gameDeck
  );
}

module.exports = {
  playCard
};
