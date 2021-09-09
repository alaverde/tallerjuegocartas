import React from "react";
import { useState } from "react";
import GameContext from "./context/GameContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Game from "./pages/Game";

function App() {

  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [gameId, setGameId] = useState('');
  const [cardsPlayer1, setCardsPlayer1] = useState([]);
  const [cardsPlayer2, setCardsPlayer2] = useState([]);
  const [iconWinnerPlayer1, setIconWinnerPlayer1] = useState('');
  const [iconWinnerPlayer2, setIconWinnerPlayer2] = useState('');
  const value = {
    player1, setPlayer1, 
    player2, setPlayer2, 
    gameId, setGameId,
    cardsPlayer1, setCardsPlayer1,
    cardsPlayer2, setCardsPlayer2,
    iconWinnerPlayer1, setIconWinnerPlayer1,
    iconWinnerPlayer2, setIconWinnerPlayer2
  };

  return (
    <div className="App">
        <Router>
          <GameContext.Provider value={value}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/game" component={Game} />
                <Route exact path="*" component={Home} />
            </Switch>
          </GameContext.Provider>
      </Router>
    </div>
  );
}

export default App;
