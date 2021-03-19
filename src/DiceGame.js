import React from 'react';
import GameBoard from './Components/Board/Board';

import './App.css';
// import ReactDice from 'react-dice-complete';
// import 'react-dice-complete/dist/react-dice-complete.css';
// import * as THREE from "three";

function DiceGame() {
  return (
    <div className="dice-game">
      <GameBoard/>
    </div>
  );
}

export default DiceGame;
