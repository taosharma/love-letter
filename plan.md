OK! The time has come to make a backend and a frontend for this game. I have all the tools, just gotta slot them into the right place. With socket.io it feels trickier to separate the backend and frontend, as the channels of communication are left open. However, it can be done. I'll start with what needs to be able to happen, then break down where it needs to happen.

1. Two distinct players (clients) need to be able to connect to a server.
2. Once they have connected, either player can start a game of Love Letter.
3. Starting the game generates a new game on the server side.
4. Each player is presented with their hand of cards.
5. The remaining cards in the deck, and each player's discard pile, are visible to both players.
6. There should be a public text log of what has happened in the game so far.
7. The player can only take one action - playing a card. Everything else is automated.
8. A player should not be able to play a card if it is not their turn.
9. The game ends when one player is eliminated, or one player has the highest value card with no cards remaining in the deck.
10. The winner's score is increased, and another round begins.

Backend:

1. Setup a socket.io connection that assigns each player a unique room (as per game of counters).
2. Write the logic for creating a new game, then access its properties to display on the frontend.

Frontend:

1. Display the properties of the game on the frontend, and have them update as the game state.
