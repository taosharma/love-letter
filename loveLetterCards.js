function Card(name) {
  this.name = name;
}

class Guard extends Card {
  constructor() {
    super();
    this.name = "guard";
    this.value = 1;
    this.action = function playPriest(
      playerHand,
      opponentHand,
      playerDiscard,
      opponentDiscard
    ) {
      //This function resolves the Guard card action. It lets a player guess the card in their opponents hand. If they guess correctly, their opponent discards the card and is out of the game.
      let playerGuess = baron; // prompt("Guess your opponent's card.").value;
      if (playerGuess === Guard.type) {
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

class Priest extends Card {
  constructor() {
    super();
    this.name = "priest";
    this.value = 2;
    this.action = function playPriest(
      playerHand,
      opponentHand,
      playerDiscard,
      opponentDiscard
    ) {
      return; //Semantic warning to let player know what their opponent's card is.
    };
  }
}

class Baron extends Card {
  constructor() {
    super();
    this.name = "baron";
    this.value = 3;
    this.action = function playBaron(
      playerHand,
      opponentHand,
      playerDiscard,
      opponentDiscard
    ) {
      //This function resolves the Baron card action. It lets a player compare the value of the remaining card in their hand with the value of the card in their opponent's hand. Whichever player has the lower value discards their card and is out of the game. If they are equal both the player and their opponent keep their cards, but now know what cards each other have.
      if (playerHand[0].value > opponentHand[0].value) {
        opponentDiscard.push(opponentHand[0]);
        opponentHand.splice(0, 1);
        return;
      }
      if (playerHand[0].value < opponentHand[0].value) {
        playerDiscard.push(playerHand[0]);
        playerHand.splice(0, 1);
        return;
      }
    };
  }
}

class Handmaid extends Card {
  constructor() {
    super();
    this.name = "handmaid";
    this.value = 4;
    this.action = function playPriest(
      playerHand,
      opponentHand,
      playerDiscard,
      opponentDiscard
    ) {
      return; //Semantic warning to let opponent know that the player has protected themself until their next turn.
    };
  }
}

module.exports = {
  Card,
  Guard,
  Priest,
  Baron
};
