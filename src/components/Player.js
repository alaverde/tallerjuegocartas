import React from "react";
import "./Player.css";

const Player = ({playerNumber, playerName, cards, iconWinner, cardsSelected}) => {
    console.log("Player", iconWinner);

    const colorPlayer = playerNumber === "2" ? 'second-player' : 'primary-player';
    const hide = iconWinner === "" ? 'hide' : '';

    return (
      <div className={`player`}>
          <h1 className={`name-player line-bottom  ${colorPlayer}`}>{playerName}</h1>
          <img className={`icon-winner ${hide}`} src={`${process.env.PUBLIC_URL}/${iconWinner}`} alt="icon-winner"></img>
          <div>
            <h2 className="card-selected standard-tile ">Cartas opcionadas</h2>
            <div className="board-card-selected line-bottom">
                <img className="card" src={cardsSelected.length === 0 ? process.env.PUBLIC_URL + '/no-card.png' : cardsSelected[0].image} alt="card1"></img>
                <img className="card" src={cardsSelected.length === 0 ? process.env.PUBLIC_URL + '/no-card.png' : cardsSelected[1].image} alt="card2"></img>
            </div>
          </div>
          <div>
            <h2 className="card-selected standard-tile">Cartas obtenidas</h2>
            <div className="board-cards">
              {cards.map((card, index) => {
                return <img className="card" src={card.image} alt={card.value}></img>
              })}
            </div>
          </div>
      </div>
    );
  };
  
  export default Player;