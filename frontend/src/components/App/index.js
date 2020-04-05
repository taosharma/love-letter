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
  const [deck, setDeck] = useState({});

  useEffect(() => {
    connection.on("joinedRoom", (data) => {
      console.log(data.message);
      setPlayerId(data.id);
    });
    connection.on("updateGame", (data) => {
      console.log("updateGame event connected", data);
      updateGame(data);
    });
  }, [connection, updateGame]);

  function startNewGame() {
    connection.emit("startNewGame", { id: playerId });
  }

  function drawCard() {
    connection.emit("drawCard", { id: playerId });
  }

  function playCard(card) {
    connection.emit("playCard", { id: playerId, card: card });
  }

  function updateGame(data) {
    setDeck(data.deck);
    if (playerId === 0) {
      setPlayer(data.players[0]);
      setOpponent(data.players[1]);
    }
    if (playerId === 1) {
      setPlayer(data.players[1]);
      setOpponent(data.players[0]);
    }
  }

  return (
    <main className="App">
      <section className={css.playerContainer}>
        <Player {...player} />
      </section>
      <section className={css.opponentContainer}>
        <Player {...opponent} playCard={playCard} />
      </section>
      <section className={css.deckContainer}>
        <Deck {...deck} />
        <button onClick={() => startNewGame()}>Start New Game</button>
        <button onClick={() => drawCard()}>Draw Card</button>
      </section>
      <section className={css.gameLogContainer}>
        <GameLog />
      </section>
    </main>
  );
}

export default App;
