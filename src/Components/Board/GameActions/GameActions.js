import React, { Component } from 'react';
import Action from './Action';
import './GameActions.css'

export default class GameActions extends Component {
  state={
    actions: ["new game","roll","hold"],
    icons: ["fas fa-gamepad","fas fa-dice","fas fa-history"],
    disable: false 
  }

  activateAction = (action) => {
    switch(action) {
      case "NEW GAME":
        this.newGame();
        break;
      case "ROLL":
        this.props.roll();
        break;
      case "HOLD":
        this.hold();
        break;
      default:
    }
  }


  hold = () => {
    this.props.hold();
  }

  newGame = () => {
    this.props.reset();
  }

  renderActions = () => this.state.actions.map((action,i) => {
    return(
      <Action 
        key={i.toString()}
        action={action.toUpperCase()}
        icon={this.state.icons[i]}
        sendResult={this.activateAction}
        state={this.state.disable}
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
