// Love Letter is a game with sixteen cards and 1-4 players.
// Each player has 1 card in their hand at all times.
// On each player's turn they take a card from the face down deck, look at both their cards, and choose one to play.
// Play continues until the deck is empty or all but one players are eliminated.
// Each card has a different power which effects something about the game, and triggers when it is played.

//Love Letter can be divided into three stages, the game, a round of the game, and each player's turn within a round.
//There are four main objects in the game: the individual cards, the deck of cards, each player's hand of cards, and each player's discard pile.

//Alex's suggestion: design each card as a constructer object with inbuilt functions.

function Card(name) {
  this.name = name;
}

class Guard extends Card {
  constructor() {
    super();
    this.name = "guard";
    this.value = 1;
    this.action = function(opponentHand, opponentDiscard) {
      //This function resolves the Guard card action. It lets a player guess the card in their opponents hand. If they guess correctly, their opponent discards the card and is out of the game.
      let playerGuess = prompt("Guess your opponent's card.").value;
      if (playerGuess === guard.type) {
        playerGuess = prompt("Cannot guess guard. Try again.").value;
      }
      if (playerGuess === opponentHand[0]) {
        opponentDiscard.push(opponentHand[0]);
        opponentHand.splice(0, 1);
        return opponentHand, opponentDiscard;
      } else return;
    };
  }
}

const guard = { value: 1, type: "guard" };
const priest = { value: 2, type: "priest" };
const baron = { value: 3, type: "baron" };

let deckOfCards = [
  guard,
  guard,
  guard,
  guard,
  guard,
  priest,
  priest,
  baron,
  baron,
  "Handmaid",
  "Handmaid",
  "Prince",
  "Prince",
  "King",
  "Countess",
  "Princess"
];

let player1Hand = [Guard, Guard];

let player1Discard = [];

let player2Hand = [baron];

let player2Discard = [];

let chosenCard = 0;

function getRandomInt(max) {
  //Function which can choose a random whole number with a max limit.
  return Math.floor(Math.random() * max);
  ``;
}

function dealCards() {
  //Function to deal one card to each player from the deck.
  drawCard(player1Hand);
  drawCard(player2Hand);
}

function endGame() {
  //This function ends the game when a player has no cards in their hand and tries to draw a card.
  if (player1Hand === []) {
    console.log("Player 2 wins!");
  } else if (player2Hand === []) {
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
  playerDiscard[playerDiscard.length - 1].action(opponentHand, opponentDiscard);

  // if (playerDiscard[playerDiscard.length - 1] === Guard) {
  //   playGuard(opponentHand, opponentDiscard);
  // }
  // if (playerDiscard[0] === priest) {
  //   playPriest(opponentHand);
  // }
  // if (opponentHand === [] || playerHand === []) {
  //   endGame();
  // }
  return playerHand, opponentHand, playerDiscard, opponentDiscard;
}

// function playGuard(opponentHand, opponentDiscard) {
//   //This function resolves the Guard card action. It lets a player guess the card in their opponents hand. If they guess correctly, their opponent discards the card and is out of the game.
//   let playerGuess = baron; //Enter guessed card here.
//   if (playerGuess === guard.type) {
//     playerGuess = prompt("Guess your opponent's card.");
//   }
//   if (playerGuess === opponentHand[0]) {
//     opponentDiscard.push(opponentHand[0]);
//     opponentHand.splice(0, 1);
//     return opponentHand, opponentDiscard;
//   } else return;
// }

function playPriest(opponentHand) {
  //This function resolves the Priest card action. It lets a player see the card in their opponents hand.
  alert(opponentHand[0]);
}

function playBaron(playerHand, opponentHand, playerDiscard, opponentDiscard) {
  //This function resolves the Baron card action. It lets a player compare the value of the remaining card in their hand with the value of the card in their opponent's hand. Whichever player has the lower value discards their card and is out of the game. If they are equal both the player and their opponent keep their cards, but now know what cards each other have.
  if (playerHand[0][1] > opponentCard.value) {
    opponentDiscard.push(opponentHand[0]);
    opponentHand.splice(0, 1);
  }
}

// console.log(0, player1Hand, player2Hand, player1Discard, player2Discard);
// playCard(0, player1Hand, player2Hand, player1Discard, player2Discard);
// console.log(0, player1Hand, player2Hand, player1Discard, player2Discard);
