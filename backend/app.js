const express = require('express');

const PORT = 5000;

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const cors = require('cors');
app.use(cors());

// A set of functions that use the game logic.

const {
  createNewGame,
  initialiseRound,
  getPlayer,
  getDeck,
  drawCard,
  playCard,
} = require('./models/game');

// The number of players that are currently in the game.

let numberOfPlayers = 0;

// The variable that holds the game currently being played (instance of class: Game)

let currentGame = null;

// The assignRoom function returns a 1 or a 0 depending on the number of players currently in the game.

function assignRoom() {
  numberOfPlayers++;
  if (numberOfPlayers % 2 === 0) {
    return 1;
  } else return 0;
}

// Initialises socket.io with the namespace /game.

const game = io.of('/game');

// Listens for a client to connect to the /game namespace, afterwhich the enclosed code block will run.

game.on('connection', (socket) => {
  // The client (henceforth 'player' because they are in the game) is assigned to either room 1 or room 2.

  socket.join(`${assignRoom()}`);

  // Assigns the player's room number a variable by looking at the room they have joined on the socket object.

  let room = Object.keys(socket.adapter.sids[socket.id]);
  console.log(`Player has joined room ${room[0]}`);

  /*   Listens for teh readyToPlay event, ad emits the player's room number to their room so that it can be used as a form of 
identification. */

  game.on('readyToPlay', (socket) => {
    console.log(`Player ${Number(room[0])} is ready to play.`);
    game.to(`${room[0]}`).emit('joinedRoom', {
      message: `You have joined room ${room[0]}.`,
      id: Number(room[0]),
    });
  });

  /*   Listens for the startNewGame event. Creates a new game, initialises the first round and emits the game assets to each player. 
Sets the currentGame to be the newly created game. */

  socket.on('startNewGame', (socket) => {
    console.log(`Player ${socket.id} has started a new game`);
    const newGame = createNewGame();
    initialiseRound(newGame);
    game.emit('updateGame', {
      players: [getPlayer(newGame, 0), getPlayer(newGame, 1)],
      deck: getDeck(newGame),
    });
    currentGame = newGame;
  });

  // Listens for the drawCard event. Uses the id sent by the client to give that player a card from the top of the deck.

  socket.on('drawCard', (event) => {
    console.log(`Player ${event.id} has drawn a card`);
    drawCard(currentGame, event.id);
    game.emit('updateGame', {
      players: [getPlayer(currentGame, 0), getPlayer(currentGame, 1)],
      deck: getDeck(currentGame),
    });
  });

  // Listens for the playCard event. Uses the

  socket.on('playCard', (event) => {
    console.log(
      `Player ${event.id} has played their card in position ${event.card}`
    );
    playCard(currentGame, event.card);
    game.emit('updateGame', {
      players: [getPlayer(currentGame, 0), getPlayer(currentGame, 1)],
      deck: getDeck(currentGame),
    });
  });
});

server.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
