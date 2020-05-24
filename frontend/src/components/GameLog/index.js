import React from 'react';

function GameLog({ gameLogList }) {
  return (
    <section>
      {gameLogList.map((listItem, index) => (
        <p key={index}>{listItem}</p>
      ))}
    </section>
  );
}

GameLog.defaultProps = {
  gameLogList: ['Game log list example 1', 'Game log list example 2'],
};

export default GameLog;
