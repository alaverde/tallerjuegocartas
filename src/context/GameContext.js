import React from "react";

const GameContext = React.createContext({
  player1: '',
  setPlayer1: () => {},
  player2: '',
  setPlayer2: () => {},
  gameId: '',
  setGameId: () => {}
});

export default GameContext;