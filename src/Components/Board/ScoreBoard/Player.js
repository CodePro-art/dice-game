import React, { Component } from 'react'

export default class Player extends Component {
  state={
    name: this.props.name,
    currentScore: this.props.score.currentScore,
    globalScore: this.props.score.globalScore,
  }

  componentWillReceiveProps(){
    this.setState({
      currentScore: this.props.score.currentScore,
      globalScore: this.props.score.globalScore})
  }

  render() {
    return (
      <div className="player-container">
        <div className="player-details">
          <h1 className="player-name" style={{color: this.props.color}}>{this.state.name}</h1>
          <h3 className="total-wins">{this.props.wins}</h3>
        </div>
        
        <button className="global-score glass blue-b">{this.state.globalScore}</button>
        <button className="current-score glass red-b">{this.state.currentScore}</button>
      </div>
    )
  }
}
