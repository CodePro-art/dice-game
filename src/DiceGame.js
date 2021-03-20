import React from 'react';
import GameBoard from './Components/Board/Board';
import GameHeader from './Components/Header/Header'
import './DiceGame.css';

// import ReactDice from 'react-dice-complete';
// import 'react-dice-complete/dist/react-dice-complete.css';


function DiceGame() {
  return (
    <div className="dice-game">
      <GameHeader/>
      <GameBoard/>
    </div>
  );
}

export default DiceGame;
