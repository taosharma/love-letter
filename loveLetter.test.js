const Game = require("./gameMechanics/gameFunctions/Game.js");
const Player = require("./gameMechanics/gameFunctions/Player.js");
const { Deck } = require("./gameMechanics/gameFunctions/Deck.js");
const { Card } = require("./gameMechanics/gameCards/Card.js");

// Tests for whether a new game has initialised correctly:

describe("Starting a game", () => {
  beforeEach(() => {
    let game = new Game((numberOfPlayers = 2));
    return game;
  });
  test("Game is created with correct number of players", () => {
    expect(game.players.length).toBe(2);
    for (const player of game.players) {
      expect(player instanceof Player).toBe(true);
    }
  });

  test("Game is created with players that have distinct IDs", () => {
    const playerIDs = game.players.map(player => player.id);
    const uniquePlayerIDs = new Set(playerIDs);
    expect(uniquePlayerIDs.size).toBe(2);
  });

  test("Game is created with players with status 'player created'", () => {
    for (const player of game.players) {
      expect(player.status).toBe("player created");
    }
  });
});

// Tests for whether a new round has initialised correctly:

//Integration test:

test("New round is initialised correctly", () => {
  let game = new Game();
  game.initialiseRound();
  for (const player of game.players) {
    expect(player.hand.length).toBe(1);
    expect(player.status).toBe("waiting to play");
  }
});

// Unit tests:

test("Round is initialised with a deck", () => {
  let game = new Game((numberOfPlayers = 2));
  game.initialiseRound();
  expect(game.deck instanceof Deck).toBe(true);
});

test("Players status should be 'waiting to play' after initialising a round", () => {
  let game = new Game((numberOfPlayers = 2));
  game.initialiseRound();
  for (const player of game.players) {
    expect(player.status).toBe("waiting to play");
  }
});

test("Players do not have any cards in their discard pile after initialising a round", () => {
  let game = new Game((numberOfPlayers = 2));
  game.initialiseRound();
  for (const player of game.players) {
    expect(player.discard).toStrictEqual([]);
  }
});

test("A card is discarded from the deck after initialising a round, and each player has drawn a card", () => {
  let game = new Game((numberOfPlayers = 2));
  game.initialiseRound();
  expect(game.deck._cards.length).toBe(13);
  for (const player of game.players) {
    expect(player.hand.length).toBe(1);
  }
});

test("Each player has a card in their hand", () => {
  let game = new Game((numberOfPlayers = 2));
  game.initialiseRound();
  for (const player of game.players) {
    expect(player.hand[0] instanceof Card).toBe(true);
  }
});

test("Turn counter is set to 1 after initialising a round", () => {
  let game = new Game((numberOfPlayers = 2));
  game.initialiseRound();
  expect(game.turn).toBe(1);
});

// Tests for whether a round is being played correctly:

test("A round ends when it has been won by a player in the game", () => {
  let game = new Game((numberOfPlayers = 2));
  game.initialiseRound();
  game.playRound();
  const winningPlayer = game.players.map(player => {
    if ((player.score = 1)) {
      return player;
    }
    expect(winningPlayer[0].score).toBe(1);
  });
});
