import React, { Component } from 'react';
import Action from './Action';
import './GameActions.css'

export default class GameActions extends Component {
  state={
    actions: ["new game","roll","hold"],
    icons: ["fas fa-gamepad","fas fa-dice","fas fa-history"]
  }
  renderActions = () => this.state.actions.map((action,i) => {
    return(
      <Action 
      key={i.toString()}
      action={action}
      icon={this.state.icons[i]}
      />
    )
  })

  render() {
    return (
      <div className="game-actions-container">
        {this.renderActions()}
      </div>
    )
  }
}
