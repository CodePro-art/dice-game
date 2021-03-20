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
        <Player name={this.state.names[0].toUpperCase()} score={this.state.players[0]} color={this.props.colors[0]}/>
        <Player name={this.state.names[1].toUpperCase()} score={this.state.players[1]} color={this.props.colors[1]}/>
      </div>
    )
  }
}
