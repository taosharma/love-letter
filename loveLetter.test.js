const Game = require("./gameMechanics/gameFunctions/Game.js");
const Player = require("./gameMechanics/gameFunctions/Player.js");
const Deck = require("./gameMechanics/gameFunctions/Deck.js");
const Card = require("./gameMechanics/gameCards/card.js");

test.skip("New round is initialised correctly", () => {
  let newGame = new Game();
  newGame.initialiseRound();

  for (const player of newGame.players) {
    expect(player.hand.length).toBe(1);
    expect(player.status).toBe("PLAYING");
  }
});

test.skip("Game is created with correct number of players", () => {
  let game = new Game((numberOfPlayers = 2));
  expect(game.players.length).toBe(2);
  console.log(game.players);
  for (const player of game.players) {
    expect(player instanceof Player);
  }
});

test.skip("Players have distinct IDs", () => {
  let game = new Game((numberOfPlayers = 2));
  const playerIDs = game.players.map(player => player.id);
  const uniquePlayerIDs = new Set(playerIDs);
  expect(uniquePlayerIDs.size).toBe(2);
});

test.skip("Players status should be 'player created'", () => {
  let game = new Game((numberOfPlayers = 2));
  for (const player of game.players) {
    expect(player.status).toBe("player created");
  }
});

test.skip("Players status should be 'waiting to play' after initialising a round", () => {
  let game = new Game((numberOfPlayers = 2));
  game.initialiseRound();
  for (const player of game.players) {
    expect(player.status).toBe("waiting to play");
  }
});

test.skip("Players do not have any cards in their hand after initialising a round", () => {
  let game = new Game((numberOfPlayers = 2));
  game.initialiseRound();
  for (const player of game.players) {
    expect(player.hand).toStrictEqual([]);
  }
});

test.skip("Players do not have any cards in their discard pile after initialising a round", () => {
  let game = new Game((numberOfPlayers = 2));
  game.initialiseRound();
  for (const player of game.players) {
    expect(player.discard).toStrictEqual([]);
  }
});

test("Round is initialised with a deck", () => {
  let game = new Game((numberOfPlayers = 2));
  game.initialiseRound();
  expect(game.deck instanceof Deck);
});

test.skip("Round is initialised with a deck that contains 16 cards", () => {
  let game = new Game((numberOfPlayers = 2));
  game.initialiseRound();
  expect(game.deck._cards.length).toBe(16);
});

test.skip("A card is discarded from the deck after initialising a round", () => {
  let game = new Game((numberOfPlayers = 2));
  game.initialiseRound();
  expect(game.deck._cards.length).toBe(15);
});

test.skip("Each player has a card in their hand after initialising a round", () => {
  let game = new Game((numberOfPlayers = 2));
  game.initialiseRound();
  expect(game.players[0].hand[0] instanceof Card);
});
