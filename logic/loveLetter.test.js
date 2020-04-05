const Game = require("./gameMechanics/gameFunctions/Game.js");
const Player = require("./gameMechanics/gameFunctions/Player.js");
const {
  Deck,
  deckSpecification
} = require("./gameMechanics/gameFunctions/Deck.js");
const { Card } = require("./gameMechanics/gameCards/Card.js");
const { Priest } = require("./gameMechanics/gameCards/Priest.js");
const { Baron } = require("./gameMechanics/gameCards/Baron.js");
const { Countess } = require("./gameMechanics/gameCards/Countess.js");
const { King } = require("./gameMechanics/gameCards/King.js");
const { Prince } = require("./gameMechanics/gameCards/Prince.js");
const { Princess } = require("./gameMechanics/gameCards/Princess.js");
const { TestGuard } = require("./fixtures/testGuard.js");

// Tests for whether a new game has initialised correctly:

describe("Starting a game", () => {
  test("Game is created with correct number of players", () => {
    let game = new Game(2);
    expect(game.players.length).toBe(2);
    for (const player of game.players) {
      expect(player instanceof Player).toBe(true);
    }
  });

  test("Game is created with players that have distinct IDs", () => {
    let game = new Game(2);
    const playerIDs = game.players.map(player => player.id);
    const uniquePlayerIDs = new Set(playerIDs);
    expect(uniquePlayerIDs.size).toBe(2);
  });

  test("Game is created with players with status active", () => {
    let game = new Game(2);
    for (const player of game.players) {
      expect(player.status).toBe("active");
    }
  });
});

// Tests for whether a new round has initialised correctly:

describe("Initialising a round", () => {
  //Integration test:

  test("New round is initialised correctly", () => {
    let game = new Game();
    game.initialiseRound();
    for (const player of game.players) {
      expect(player.hand.length).toBe(1);
      expect(player.status).toBe("active");
    }
  });

  // Unit tests:

  test("Round is initialised with a deck", () => {
    let game = new Game(2);
    game.initialiseRound();
    expect(game.deck instanceof Deck).toBe(true);
  });

  test("Players status should be 'active' after initialising a round", () => {
    let game = new Game(2);
    game.initialiseRound();
    for (const player of game.players) {
      expect(player.status).toBe("active");
    }
  });

  test("Players do not have any cards in their discard pile after initialising a round", () => {
    let game = new Game(2);
    game.initialiseRound();
    for (const player of game.players) {
      expect(player.discard).toStrictEqual([]);
    }
  });

  test("A card is discarded from the deck after initialising a round, and each player has drawn a card", () => {
    let game = new Game(2);
    game.initialiseRound();
    expect(game.deck.cards.length).toBe(13);
    for (const player of game.players) {
      expect(player.hand.length).toBe(1);
    }
  });

  test("Each player has a card in their hand", () => {
    let game = new Game(2);
    game.initialiseRound();
    for (const player of game.players) {
      expect(player.hand[0] instanceof Card).toBe(true);
    }
  });

  test("Round counter increases by 1 after inititalising a round", () => {
    let game = new Game(2);
    game.initialiseRound();
    expect(game.round).toBe(1);
  });
});

// Tests for whether a new round is being played correctly:

describe("Playing a round", () => {
  // Tests for whether a round is being played correctly:

  test("A round ends when it has been won by a player in the game, and their score has increased.", () => {
    let game = new Game(2);
    game.initialiseRound(deckSpecification);
    game.playRound();
    const winningPlayer = game.players.filter(player => player.score > 0);
    expect(winningPlayer[0].score).toBe(1);
  });
});

// Tests, using fixtures, for whether each card is working correctly:

describe("Cards working correctly", () => {
  test("When a player correctly guesses their target's hand using the Guard, their target discards their hand and their status is set to inactive", () => {
    let game = new Game(2);
    const actualPlayer = game.players[0];
    const actualTarget = game.players[1];
    actualPlayer.hand.push(new TestGuard());
    actualTarget.hand.push(new Priest());
    actualPlayer.playCard(0, actualTarget);
    expect(actualTarget.hand).toStrictEqual([]);
    expect(actualTarget.status).toBe("inactive");
  });

  test("When a player incorrectly guesses their target's hand using the Guard, the target does not discard their hand and their status remains as active", () => {
    let game = new Game(2);
    const actualPlayer = game.players[0];
    const actualTarget = game.players[1];
    actualPlayer.hand.push(new TestGuard());
    actualTarget.hand.push(new Baron());
    actualPlayer.playCard(0, actualPlayer, actualTarget);
    expect(actualTarget.hand[0] instanceof Baron).toBe(true);
    expect(actualTarget.status).toBe("active");
  });

  test("When a player has a Countess and King, they are forced to play the Countess", () => {
    let game = new Game(1);
    const actualPlayer = game.players[0];
    actualPlayer.hand.push(new Countess(), new King());
    actualPlayer.playTurn(1);
    expect(actualPlayer.hand[0] instanceof King).toBe(true);
  });

  test("When a player has a Countess and Prince, they are forced to play the Countess", () => {
    let game = new Game(1);
    const actualPlayer = game.players[0];
    actualPlayer.hand.push(new Countess(), new Prince());
    actualPlayer.playTurn(1);
    expect(actualPlayer.hand[0] instanceof Prince).toBe(true);
  });

  test("When a player has the Princess in their hand, they are forced to play their other card", () => {
    let game = new Game(1);
    const actualPlayer = game.players[0];
    actualPlayer.hand.push(new Princess(), new Countess());
    actualPlayer.playTurn(0);
    expect(actualPlayer.hand[0] instanceof Princess).toBe(true);
  });

  test("When a player plays a Prince, their target discards a card a draws a new card from the deck", () => {
    let game = new Game(2);
    game.deck = new Deck(deckSpecification);
    const actualPlayer = game.players[0];
    const actualTarget = game.players[1];
    actualPlayer.hand.push(new Prince());
    actualTarget.hand.push(new Countess());
    actualPlayer.playTurn(0, actualTarget, game.deck);
    expect(actualTarget.hand[0] instanceof Countess).toBe(false);
    expect(actualTarget.hand[0] instanceof Card).toBe(true);
  });
});
