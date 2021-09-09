import React, {useContext} from "react";
import "./Game.css";
import Player from "../components/Player";
import GameContext from "../context/GameContext";
import { getSuiteValue } from "../utils/Suite";
import { useHistory } from "react-router-dom";

const Game = () => {
    const {
      gameId, 
      cardsPlayer1, 
      setCardsPlayer1,
      cardsPlayer2, 
      setCardsPlayer2,
      iconWinnerPlayer1,
      setIconWinnerPlayer1,
      iconWinnerPlayer2,
      setIconWinnerPlayer2,
      cardsSelectedPlayer1,
      setCardsSelectedPlayer1,
      cardsSelectedPlayer2,
      setCardsSelectedPlayer2,
      endGame,
      setEndGame
    } = useContext(GameContext);

    const history = useHistory();

    
    const IconWinner = 'winner.png';
    const IconLoser = 'loser.png';
    const IconEqualResult = 'empate.png';

    const handleClickPlay = () => {
      if(!endGame){
        fetch(`http://deckofcardsapi.com/api/deck/${gameId}/shuffle/`)
        .then( () => {
            fetch(`http://deckofcardsapi.com/api/deck/${gameId}/draw/?count=2`)
            .then(response => response.json())
            .then(response => {
              if(response.cards.length !== 0){
                handleAddCards(response.cards);
              }
            });
          }
        );
      }else{
        history.push("/");
        history.go(0);
      }
      
    }

    const handleAddCards = (cards) => {
        const newCardsPlayer1 = [ cards[0], ...cardsPlayer1];
        const newCardsPlayer2 = [ cards[1], ...cardsPlayer2];

        setCardsPlayer1(newCardsPlayer1);
        setCardsPlayer2(newCardsPlayer2);

        checkWinner(newCardsPlayer1, newCardsPlayer2);
    }

    const checkWinner = (newCardsPlayer1, newCardsPlayer2) => {
      const searchPlayer1 = newCardsPlayer1.reduce((accumulator, card) => {
        accumulator[card.value] = ++accumulator[card.value] || 0;
        return accumulator;
      }, {});

      const searchPlayer2 = newCardsPlayer2.reduce((accumulator, card) => {
        accumulator[card.value] = ++accumulator[card.value] || 0;
        return accumulator;
      }, {});
      
      const duplicatesPlayer1 = newCardsPlayer1.filter( (card) => {
        return searchPlayer1[card.value];
      });

      const duplicatesPlayer2 = newCardsPlayer2.filter( (card) => {
        return searchPlayer2[card.value];
      });

      if(duplicatesPlayer1.length === 2 && duplicatesPlayer2.length === 0){
        winPlayer1();
        setCardsSelectedPlayer1(duplicatesPlayer1);
        setEndGame(true);
      }else if(duplicatesPlayer2.length === 2 && duplicatesPlayer1.length === 0){
        winPlayer2();
        setCardsSelectedPlayer2(duplicatesPlayer2);
        setEndGame(true);
      }else if(duplicatesPlayer2.length === 2 && duplicatesPlayer1.length === 2){

        setCardsSelectedPlayer1(duplicatesPlayer1);
        setCardsSelectedPlayer2(duplicatesPlayer2);

        const maxValuePlayer1 = getSuiteValue(duplicatesPlayer1[0].suit) + 
          getSuiteValue(duplicatesPlayer1[1].suit);

        const maxValuePlayer2 = getSuiteValue(duplicatesPlayer2[0].suit) + 
          getSuiteValue(duplicatesPlayer2[1].suit);

        if(maxValuePlayer1 === maxValuePlayer2){
          equalResult();
          setEndGame(true);
        }else if(maxValuePlayer1 > maxValuePlayer2){
          winPlayer1();
          setEndGame(true);
        }else if(maxValuePlayer2 > maxValuePlayer1){
          winPlayer2();
          setEndGame(true);
        }

      }
    }

    const winPlayer1 = () => {
      setIconWinnerPlayer1(IconWinner);
      setIconWinnerPlayer2(IconLoser);
    }

    const winPlayer2 = () => {
      setIconWinnerPlayer1(IconLoser);
      setIconWinnerPlayer2(IconWinner);
    }

    const equalResult = () => {
      setIconWinnerPlayer1(IconEqualResult);
      setIconWinnerPlayer2(IconEqualResult);
    }

    return (
      <GameContext.Consumer>
        { game => (
            <div className={'board'}>
              <div className="button-play">
                <img src={endGame ? process.env.PUBLIC_URL + '/replay.png' : process.env.PUBLIC_URL + '/play.png'} alt="Play" onClick={handleClickPlay}></img>
              </div>
              <Player playerNumber="1" playerName={`Jugador 1: ${game.player1}`} cards={cardsPlayer1} iconWinner={iconWinnerPlayer1} cardsSelected={cardsSelectedPlayer1}/>
              <Player playerNumber="2" playerName={`Jugador 2: ${game.player2}`} cards={cardsPlayer2} iconWinner={iconWinnerPlayer2} cardsSelected={cardsSelectedPlayer2}/>
            </div>
          )
        }
      </GameContext.Consumer>
    );
  };
  
  export default Game;