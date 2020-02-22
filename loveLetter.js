// Love Letter is a game with sixteen cards and 1-4 players.
// Each player has 1 card in their hand at all times.
// On each player's turn they take a card from the face down deck, look at both their cards, and choose one to play.
// Play continues until the deck is empty or all but one players are eliminated.
// Each card has a different power which effects something about the game, and triggers when it is played.

//Love Letter can be divided into three stages, the game, a round of the game, and each player's turn within a round.
//There are four main objects in the game: the individual cards, the deck of cards, each player's hand of cards, and each player's discard pile.

//Alex's suggestion: design each card as a constructer object with inbuilt functions.

//To do: 1. Create a function to check interaction between card types and values. 2. Test game to see if all cards work as intended. 3. Create a functionrandom deck of cards that includes correct instances of each card.

//Game functions:

const { dealCards } = require(`./gameMechanics/gameFunctions/dealCards.js`);
const { discardCard } = require(`./gameMechanics/gameFunctions/discardCard.js`);
// const { drawCard } = require(`./gameMechanics/gameFunctions/drawCard.js`);
const { endGame } = require(`./gameMechanics/gameFunctions/endGame.js`);
const { playCard } = require(`./gameMechanics/gameFunctions/playCard.js`);
// const { shuffleDeck } = require(`./gameMechanics/gameFunctions/shuffleDeck.js`);

//Game cards:

const { Card } = require(`./gameMechanics/gameCards/card.js`);
const { Guard } = require(`./gameMechanics/gameCards/guard.js`);
const { Priest } = require(`./gameMechanics/gameCards/priest.js`);
const { Baron } = require(`./gameMechanics/gameCards/baron.js`);
const { Handmaid } = require(`./gameMechanics/gameCards/handmaid.js`);
const { Prince } = require(`./gameMechanics/gameCards/prince.js`);
const { King } = require(`./gameMechanics/gameCards/king.js`);
const { Countess } = require(`./gameMechanics/gameCards/countess.js`);
const { Princess } = require(`./gameMechanics/gameCards/princess.js`);

let playerHands = [[], []];

let playerDiscards = [[], []];

let turn = 0;

let deckOfCards = [
  new Guard(),
  new Guard(),
  new Guard(),
  new Guard(),
  new Guard(),
  new Priest(),
  new Priest(),
  new Baron(),
  new Baron(),
  new Handmaid(),
  new Handmaid(),
  new Prince(),
  new Prince(),
  new King(),
  new Countess(),
  new Princess()
];

shuffleDeck(deckOfCards);
drawCard(playerHands, deckOfCards);
console.log(playerHands);

const object = {
  value: 1,
  type: object
};
