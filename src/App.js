import React from "react";
import { useState } from "react";
import GameContext from "./context/GameContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Game from "./pages/Game";

function App() {

  const [player1, setPlayer1] = useState('statePlayer1');
  const [player2, setPlayer2] = useState('statePlayer2');
  const [gameId, setGameId] = useState('stateGameId');
  const value = {player1, setPlayer1, player2, setPlayer2, gameId, setGameId};

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
