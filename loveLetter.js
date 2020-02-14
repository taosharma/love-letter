// Love Letter is a game with sixteen cards and 1-4 players.
// Each player has 1 card in their hand at all times.
// On each player's turn they take a card from the face down deck, look at both their cards, and choose one to play.
// Play continues until the deck is empty or all but one players are eliminated.
// Each card has a different power which effects something about the game, and triggers when it is played.

//Love Letter can be divided into three stages, the game, a round of the game, and each player's turn within a round.
//There are four main objects in the game: the individual cards, the deck of cards, each player's hand of cards, and each player's discard pile.

//Alex's suggestion: design each card as a constructer object with inbuilt functions.

//To do: 1. Implement handmaid function so that player is protected. 2. Refactor common play state changes into their own functions. 3. Finish logic for cards.

const { Card, Guard, Priest, Baron } = require("./loveLetterCards.js");

const guard1 = new Guard();
const guard2 = new Guard();
const priest1 = new Priest();
const priest2 = new Priest();
const baron1 = new Baron();
const baron2 = new Baron();

// let deckOfCards = [
//   guard,
//   guard,
//   guard,
//   guard,
//   guard,
//   priest,
//   priest,
//   baron,
//   baron,
//   "Handmaid",
//   "Handmaid",
//   "Prince",
//   "Prince",
//   "King",
//   "Countess",
//   "Princess"
// ];

let player1Hand = [baron1, guard2];

let player1Discard = [];

let player2Hand = [guard1];

let player2Discard = [];

let chosenCard = 0;

function getRandomInt(max) {
  //Function which can choose a random whole number with a max limit.
  return Math.floor(Math.random() * max);
}

function dealCards() {
  //Function to deal one card to each player from the deck.
  drawCard(player1Hand);
  drawCard(player2Hand);
}

function endGame() {
  //This function ends the game when a player has no cards in their hand and tries to draw a card.
  if (player1Hand == []) {
    console.log("Player 2 wins!");
  } else if (player2Hand == []) {
    console.log("Player 1 wins!");
  }
}

function drawCard(playerHand, gameDeck) {
  //This function lets the player take a card from the deck, put it into their hand, and updates the deck accordingly.
  const drawnCardNumber = getRandomInt(gameDeck.length);
  const drawnCard = gameDeck[drawnCardNumber];
  playerHand.push(drawnCard);
  gameDeck.splice(drawnCardNumber, 1);
  return playerHand, gameDeck;
}

function playCard(
  chosenCard,
  playerHand,
  opponentHand,
  playerDiscard,
  opponentDiscard
) {
  //This function lets the player play a card by putting it in their discard pile and resolving its action.
  playerDiscard.push(playerHand[chosenCard]);
  playerHand.splice(chosenCard, 1);
  playerDiscard[playerDiscard.length - 1].action(
    playerHand,
    opponentHand,
    playerDiscard,
    opponentDiscard
  );
  if (opponentHand == [] || playerHand == []) {
    endGame();
  }
  return playerHand, opponentHand, playerDiscard, opponentDiscard;
}

// console.log(player1Hand, player2Hand, player1Discard, player2Discard);
playCard(0, player1Hand, player2Hand, player1Discard, player2Discard);
console.log(player1Hand, player2Hand, player1Discard, player2Discard);
