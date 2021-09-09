import React, { useContext } from "react";
import "./Home.css";
import InputName from "../components/InputName";
import Button from "../components/Button";
import GameContext from "../context/GameContext";
import { useHistory } from "react-router";

const Home = () => {

    const {setPlayer1, setPlayer2,setGameId} = useContext(GameContext);
    const history = useHistory();

    const handleClick = () => {
      fetch('http://deckofcardsapi.com/api/deck/new')
      .then(response => response.json())
      .then(response => {
        setGameId(response.deck_id);
        history.push("/game");
      });
    }
    
    return (
      <div className={'form-container'}>
        <InputName label="Jugador #1" onChange={setPlayer1}/>
        <InputName label="Jugador #2" onChange={setPlayer2}/>
        <Button className={'button'} label="INGRESAR" onClick={handleClick} />
      </div>
    );
  };
  
export default Home;