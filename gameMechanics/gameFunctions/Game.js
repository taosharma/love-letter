class Player {
  constructor(id) {
    this.id = id;
  }
}

function getRangeArray(n) {
  return [...Array(n).keys()];
}

class Game {
  constructor(numberOfPlayers) {
    this.players = Game.generatePlayers(numberOfPlayers);
  }

  static generatePlayers(numberOfPlayers) {
    const playerIDs = getRangeArray(numberOfPlayers);
    return playerIDs.map(PlayerID => new Player(PlayerID));
  }
}

module.exports = {
  Game,
  Player
};
