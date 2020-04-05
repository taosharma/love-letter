import React, { useState, useEffect } from "react";

import css from "./App.module.css";

import GameLog from "../GameLog";
import Player from "../Player";
import Deck from "../Deck";

import io from "socket.io-client";
const game = io("http://localhost:5000/game");

function App() {
  const [connection] = useState(game);
  const [playerId, setPlayerId] = useState("");
  const [player, setPlayer] = useState({});
  const [opponent, setOpponent] = useState({});
  const [deck, setDeck] = useState([]);

  console.log(
    "Player ID:",
    playerId,
    "Player:",
    player,
    "Opponent:",
    opponent,
    "Deck:",
    deck
  );

  useEffect(() => {
    connection.on("joinedRoom", (data) => {
      console.log(data.message);
      setPlayerId(data.id);
    });
    updateGame();
  }, [connection]);

  function startNewGame() {
    connection.emit("startNewGame", { id: playerId });
    updateGame();
  }

  function updateGame() {
    connection.on("updateGame", (data) => {
      setDeck(data.deck);
      if (playerId === 0) {
        setPlayer(data.players[0]);
        setOpponent(data.players[1]);
      }
      if (playerId === 1) {
        setPlayer(data.players[1]);
        setOpponent(data.players[0]);
      }
    });
  }

  return (
    <main className="App">
      <section className={css.playerContainer}>
        <Player id={1} playerId={1} />
      </section>
      <section className={css.opponentContainer}>
        <Player />
      </section>
      <section className={css.deckContainer}>
        <Deck />
        <button onClick={() => startNewGame()}>Start New Game</button>
      </section>
      <section className={css.gameLogContainer}>
        <GameLog />
      </section>
    </main>
  );
}

export default App;
