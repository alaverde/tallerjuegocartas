import React from "react";

const GameContext = React.createContext({
  player1: '',
  setPlayer1: () => {},
  player2: '',
  setPlayer2: () => {},
  gameId: '',
  setGameId: () => {},
  cardsPlayer1: [],
  setCardsPlayer1: () => {},
  cardsPlater2: [],
  setCardsPlayer2: () => {},
  iconWinnerPlayer1: '',
  setIconWinnerPlayer1: () => {},
  iconWinnerPlayer2: '',
  setIconWinnerPlayer2: () => {},
});

export default GameContext;