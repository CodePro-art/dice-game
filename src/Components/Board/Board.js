import React, { Component } from 'react';
import ScoreBoard from './ScoreBoard/ScoreBoard';
import GameActions from './GameActions/GameActions';
import Dices from './Dices';

import './Board.css'

export default class GameBoard extends Component {
  state = {
    pointsToWin: 100,
    playerTurn: 1,
    Result: null,
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

  updateResult = (result) => {
    this.setState({result: result})
  }

  render() {
    return (
      <div className="board-game">
        <GameActions sendResult={this.updateResult} roll={() => this.content.rollAll() }/>
        <ScoreBoard players={this.state.players}/>
        <Dices ref={instance => { this.content = instance; }}/>
      </div>
    )
  }
}
