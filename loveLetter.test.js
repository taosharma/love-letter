const Game = require("./gameMechanics/gameFunctions/Game.js");
const Player = require("./gameMechanics/gameFunctions/Player.js");
const { Deck } = require("./gameMechanics/gameFunctions/Deck.js");
const { Card } = require("./gameMechanics/gameCards/Card.js");

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

  test("Game is created with players with status 'inactive'", () => {
    let game = new Game(2);
    for (const player of game.players) {
      expect(player.status).toBe("inactive");
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
    expect(game.deck._cards.length).toBe(13);
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

describe("Playing a round", () => {
  // Tests for whether a round is being played correctly:

  test("A round ends when it has been won by a player in the game, and their score has increased.", () => {
    let game = new Game(2);
    game.initialiseRound();
    game.playRound();
    const winningPlayer = game.players.filter(player => player.score > 0);
    expect(winningPlayer[0].score).toBe(1);
  });

  test.skip("A round begins with the active player drawing a card from the deck", () => {
    let game = new Game(2);
    game.initialiseRound();
    game.playRound();
    expect(game.players[0].hand.length).toBe(2);
  });

  test.skip("A round includes the active player playing a card from their hand", () => {
    let game = new Game(2);
    game.initialiseRound();
    game.playRound();
    expect(game.players[0].hand.length).toBe(2);
  });
});
