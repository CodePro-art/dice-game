import React, { Component } from 'react';
import Player from './Player'
import './ScoreBoard.css'

export default class ScoreBoard extends Component {
  
  state = {
    players: this.props.players,
    names: this.props.names
  }

  render() {
    return (
      <div className="score-board-container">
        <Player name={this.state.names[0]} score={this.state.players[0]}/>
        <Player name={this.state.names[1]} score={this.state.players[1]}/>
      </div>
    )
  }
}
