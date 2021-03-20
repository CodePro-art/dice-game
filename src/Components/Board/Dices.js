import React, { Component } from 'react';
import ReactDice from 'react-dice-complete';
import 'react-dice-complete/dist/react-dice-complete.css';

export default class Dices extends Component {
  
  render() {
    return (
      <div className="dices-container">
        <ReactDice
          numDice={2}
          defaultRoll={6}
          faceColor={"rgba(225,225,225,1)"}
          outline={true}
          outlineColor={"#666"}
          dotColor={"#333"}
          rollTime={1}
          disableIndividual={true}
          rollDone={(num) => {this.props.send(num)}}
          ref={dice => this.reactDice = dice}
        />
      </div>
    )
  }

  rollAll() {
    this.reactDice.rollAll();
  }

}
