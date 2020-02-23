const { Game, Player } = require("./gameMechanics/gameFunctions/Game.js");

test("New round is initialised correctly", () => {
  let newGame = new Game();
  newGame.initialiseRound();

  for (const player of newGame.players) {
    expect(player.hand.length).toBe(1);
    expect(player.status).toBe("PLAYING");
  }
});

test("Game is created with correct number of players", () => {
  let game = new Game((numberOfPlayers = 2));
  expect(game.players.length).toBe(2);

  for (const player of game.players) {
    expect(player instanceof Player);
  }
});

test("Players have distinct IDs", () => {
  let game = new Game((numberOfPlayers = 2));
  const playerIDs = game.players.map(player => player.id);
  const uniquePlayerIDs = new Set(playerIDs);
  expect(uniquePlayerIDs.size).toBe(2);
});
