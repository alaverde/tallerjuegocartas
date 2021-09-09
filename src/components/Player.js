import React from "react";
import "./Player.css";

const Player = ({playerNumber, playerName}) => {

    const colorPlayer = playerNumber === "2" ? 'second-player' : 'xxx';

    return (
      <div className={`player ${colorPlayer}`}>
          <h1 className="name-player line-bottom">{playerName}</h1>
          <div>
              <h2 className="card-selected standard-tile ">Cartas opcionadas</h2>
              <div className="board-card-selected line-bottom">
                  <img className="no-image"></img>
                  <img className="no-image"></img>
              </div>
          </div>
          <div>
            <h2 className="card-selected standard-tile">Cartas obtenidas</h2>
          </div>
      </div>
    );
  };
  
  export default Player;