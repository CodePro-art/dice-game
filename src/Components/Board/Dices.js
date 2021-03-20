import React, { Component } from 'react';
import ReactDice from 'react-dice-complete';
import 'react-dice-complete/dist/react-dice-complete.css';

export default class Dices extends Component {
  
  render() {
    return (
      <div className="dices-container">
        <ReactDice
          numDice={2}
          defaultRoll={1}
          faceColor={"rgba(225,225,225,1)"}
          outline={true}
          outlineColor={"#666"}
          dotColor={"#333"}
          rollTime={1}
          disableIndividual={true}
          rollDone={this.rollDoneCallback}
          ref={dice => this.reactDice = dice}
        />
      </div>
    )
  }
  rollAll() {
    this.reactDice.rollAll()
  }

  rollDoneCallback(num) {
    this.props.sendResult(num)
    console.log(`You rolled a ${num}`)
  }
}
