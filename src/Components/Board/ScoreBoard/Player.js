import React, { Component } from 'react'

export default class Player extends Component {
  state={
    name: this.props.name,
    currentScore: this.props.score.currentScore,
    globalScore: this.props.score.globalScore
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h2>{this.state.globalScore}</h2>
        <h3>{this.state.currentlScore}</h3>
      </div>
    )
  }
}
