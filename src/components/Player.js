import React from "react";
import "./Player.css";

const Player = ({playerNumber, playerName, cards, iconWinner}) => {
    console.log("Player", iconWinner);

    const colorPlayer = playerNumber === "2" ? 'second-player' : '';
    const hide = iconWinner === "" ? 'hide' : '';

    return (
      <div className={`player ${colorPlayer}`}>
          <h1 className="name-player line-bottom">{playerName}</h1>
          <img className={`icon-winner ${hide}`} src={`${process.env.PUBLIC_URL}/${iconWinner}`}></img>
          <div>
            <h2 className="card-selected standard-tile ">Cartas opcionadas</h2>
            <div className="board-card-selected line-bottom">
                <img className="" src={process.env.PUBLIC_URL + '/no-card.png'} alt="card1"></img>
                <img className="" src={process.env.PUBLIC_URL + '/no-card.png'}></img>
            </div>
          </div>
          <div>
            <h2 className="card-selected standard-tile">Cartas obtenidas</h2>
            <div className="board-cards">
              {cards.map((card, index) => {
                return <img className="" src={card.image}></img>
              })}
            </div>
          </div>
      </div>
    );
  };
  
  export default Player;