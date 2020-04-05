import React from "react";

import Hand from "../Hand";
import Discard from "../Discard";

function Player({
  id,
  status,
  score,
  hand,
  discard,
  protection,
  playCard,
  playerId,
}) {
  return (
    <>
      <section>
        <h3>Player: {id}</h3>
        <p>
          Status: {status} Score: {score} Protected: {protection}
        </p>
      </section>
      {playerId === id && <Hand cards={hand} playCard={playCard} />}
      <Discard cards={discard} />
    </>
  );
}

Player.defaultProps = {
  id: "Example Player",
  status: "Not Real",
  score: "0",
  hand: [
    { type: "default type", value: "default value", action: "default action" },
  ],
  discard: [
    { type: "default type", value: "default value", action: "default action" },
  ],
  protection: "N/A",
  playCard: () => console.log("You have clicked 'playCard'"),
  playerId: 0,
};

export default Player;
