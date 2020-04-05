const express = require("express");

const PORT = 5000;

const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

const cors = require("cors");
app.use(cors());

const {
  createNewGame,
  initialiseRound,
  getPlayer,
  getDeck,
  drawCard,
  playCard,
} = require("./models/game");

let numberOfPlayers = 0;
let currentGame = null;

function assignRoom() {
  numberOfPlayers++;
  if (numberOfPlayers % 2 === 0) {
    return 1;
  } else return 0;
}
const game = io.of("/game");

game.on("connection", (socket) => {
  socket.join(`${assignRoom()}`);
  let room = Object.keys(socket.adapter.sids[socket.id]);
  console.log(`Player has joined room ${room[0]}`);

  game.to(`${room[0]}`).emit("joinedRoom", {
    message: `You have joined room ${room[0]}.`,
    id: Number(room[0]),
  });

  socket.on("startNewGame", (socket) => {
    console.log(`Player ${socket.id} has started a new game`);
    const newGame = createNewGame();
    initialiseRound(newGame);
    game.emit("updateGame", {
      players: [getPlayer(newGame, 0), getPlayer(newGame, 1)],
      deck: getDeck(newGame),
    });
    currentGame = newGame;
  });

  socket.on("drawCard", (socket) => {
    console.log(`Player ${socket.id} has drawn a card`);
    drawCard(currentGame, socket.id);
    game.emit("updateGame", {
      players: [getPlayer(currentGame, 0), getPlayer(currentGame, 1)],
      deck: getDeck(currentGame),
    });
  });

  socket.on("playCard", (socket) => {
    console.log(`Player ${socket.id} has played a card`);
    playCard(currentGame, socket.card);
    game.emit("updateGame", {
      players: [getPlayer(currentGame, 0), getPlayer(currentGame, 1)],
      deck: getDeck(currentGame),
    });
  });
});

server.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
