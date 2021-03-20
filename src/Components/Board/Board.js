import React, { Component } from 'react';
import ScoreBoard from './ScoreBoard/ScoreBoard';
import GameActions from './GameActions/GameActions';
import Dices from './Dices';

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
        <GameActions/>
        <ScoreBoard players={this.state.players}/>
        <Dices dices={this.state.dices}/>
      </div>
    )
  }
}
