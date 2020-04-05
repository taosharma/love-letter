// Require the Express module so that it can be used to manage requests to and responses from the server.

const express = require("express");

// Name the local port where the server can be found. To be replaced with environment variables in he future.

const PORT = 5000;

// Assign the express app to a variable for use.

const app = express();

// Require the game router from the routes folder. This is where game logic requests are sent, and will potentially be split int he future.

const gameRouter = require("./routes/game");

/* ".use" tells Express to use middleware. Middleware can be custom made or downloaded ready to use as an npm module. 
 This code simply console logs the requests that are made to the server.*/

app.use((request, response, next) => {
  console.log(`${request.method} requested received on ${request.url}`);
  next();
});

app.use(express.json());

app.use("/game", gameRouter);

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}.`);
});
