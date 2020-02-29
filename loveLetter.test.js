const Game = require("./gameMechanics/gameFunctions/Game.js");
const Player = require("./gameMechanics/gameFunctions/Player.js");
const { Deck } = require("./gameMechanics/gameFunctions/Deck.js");
const { Card } = require("./gameMechanics/gameCards/Card.js");

test("New round is initialised correctly", () => {
  let game = new Game();
  game.initialiseRound();

  for (const player of game.players) {
    expect(player.hand.length).toBe(1);
    expect(player.status).toBe("waiting to play");
  }
});

test("Game is created with correct number of players", () => {
  let game = new Game((numberOfPlayers = 2));
  expect(game.players.length).toBe(2);
  for (const player of game.players) {
    expect(player instanceof Player).toBe(true);
  }
});

test("Game is created with players that have distinct IDs", () => {
  let game = new Game((numberOfPlayers = 2));
  const playerIDs = game.players.map(player => player.id);
  const uniquePlayerIDs = new Set(playerIDs);
  expect(uniquePlayerIDs.size).toBe(2);
});

test("Game is created with players with status 'player created'", () => {
  let game = new Game((numberOfPlayers = 2));
  for (const player of game.players) {
    expect(player.status).toBe("player created");
  }
});

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
