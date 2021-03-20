import React from 'react';
import Board from './Components/Board/Board';
import Header from './Components/Header/Header'
import './DiceGame.css';

function DiceGame() {
  return (
    <div className="dice-game">
      <Header/>
      <Board/>
    </div>
  );
}

export default DiceGame;
