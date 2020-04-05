const express = require("express");

const PORT = 5000;

const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

const cors = require("cors");
app.use(cors());

let numberOfPlayers = 0;

function assignRoom() {
  numberOfPlayers++;
  if (numberOfPlayers % 2 === 0) {
    return 2;
  } else return 1;
}
const game = io.of("/game");

game.on("connection", (socket) => {
  socket.join(`${assignRoom()}`);
  let room = Object.keys(socket.adapter.sids[socket.id]);
  console.log(`Player has joined room ${room[0]}`);

  game.to(`${room[0]}`).emit("joinedRoom", {
    message: `You have joined room ${room[0]}.`,
    id: room[0],
  });
});

server.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
