// Love Letter is a game with sixteen cards and 1-4 players.
// Each player has 1 card in their hand at all times.
// On each player's turn they take a card from the face down deck, look at both their cards, and choose one to play.
// Play continues until the deck is empty or all but one players are eliminated.
// Each card has a different power which effects something about the game, and triggers when it is played.

//Love Letter can be divided into three stages, the game, a round of the game, and each player's turn within a round.
//There are four main objects in the game: the individual cards, the deck of cards, each player's hand of cards, and each player's discard pile.

//Alex's suggestion: design each card as a constructer object with inbuilt functions.

//To do: 1. Create a function to check interaction between card types and values. 2. Test game to see if all cards work as intended. 3. Create a functionrandom deck of cards that includes correct instances of each card.

// The command pattern.

//Game functions:

class Game {
  // 1. Generate players.
  // 2. Setup round.
  // 3. Play round.
  // 4. Check for winner, else repeat form stage 2.
}

class SetupRound {
  // 1. Reset player status
  // 2. Generate deck.
  // 3. Deal card to each player from deck.
  // 4. Set turn counter to 0
}

class PlayRound {
  // 1. Player draws a card.
  // 3. Player plays a card into their discard pile.
  // 4. Card action is resolved.
  // 5. End round if all but one player is out or there are no cards in the deck, return winning player.
  // 6. If the round has not ended, repeat from stage 1.
}
