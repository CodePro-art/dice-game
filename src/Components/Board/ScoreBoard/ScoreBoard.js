import React, { Component } from 'react';
import Player from './Player'
import './ScoreBoard.css'

export default class ScoreBoard extends Component {
 
  render() {
    return (
      <div className="score-board-container">
        <Player name="Player 1" score={this.props.players[0]}/>
        <Player name="Player 2" score={this.props.players[1]}/>
      </div>
    )
  }
}
