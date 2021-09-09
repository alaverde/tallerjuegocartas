import React, {useContext} from "react";
import "./Game.css";
import Player from "../components/Player";
import GameContext from "../context/GameContext";

const Game = () => {
    const {gameId} = useContext(GameContext);
    const handleClickPlay = () => {
      fetch(`http://deckofcardsapi.com/api/deck/${gameId}/draw/?count=2`)
      .then(response => response.json())
      .then(response => {
        console.log(response);
      });
    }

    return (
      <GameContext.Consumer>
        { game => (
            <div className={'board'}>
              <div className="button-play">
                <img src={process.env.PUBLIC_URL + '/play.png'} alt="Play" onClick={handleClickPlay}></img>
              </div>
              <Player playerNumber="1" playerName={game.player1}/>
              <Player playerNumber="2" playerName={game.player2}/>
            </div>
          )
        }
      </GameContext.Consumer>
    );
  };
  
  export default Game;