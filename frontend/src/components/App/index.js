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

  useEffect(() => {
    connection.on("joinedRoom", (data) => {
      console.log(data.message);
      setPlayerId(data.id);
    });
  }, [connection]);

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
      </section>
      <section className={css.gameLogContainer}>
        <GameLog />
      </section>
    </main>
  );
}

export default App;
