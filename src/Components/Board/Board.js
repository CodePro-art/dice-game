import React, { Component } from 'react';
import ScoreBoard from './Components/ScoreBoard/ScoreBoard';
import GameAction from './Components/Actions';
import Dices from './Components/Dices';

import './Board.css'

export default class GameBoard extends Component {
  state = {
    pointsToWin: 100,
    dice: [null,null],
    playerTurn: 1,
    players: [
      {
        currentScore: 0,
        globalScore: 0
      },
      {
        currentScore: 0,
        globalScore: 0
      }
    ]
  }

  render() {
    return (
      <div className="board-game">
        <ScoreBoard players={this.state.players}/>
        <Dices dices={this.state.dices}/>
        <GameAction/>
      </div>
    )
  }
}
