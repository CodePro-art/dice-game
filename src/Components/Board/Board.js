import React, { Component } from 'react';
import ScoreBoard from './ScoreBoard/ScoreBoard';
import GameActions from './GameActions/GameActions';
import Dices from './Dices';

import './Board.css'

export default class GameBoard extends Component {
  state = {
    pointsToWin: 100,
    playerTurn: Math.round(Math.random()),
    names: ["player 1","player 2"],
    players: [
      {
        wins: 0,
        currentScore: 0,
        globalScore: 0
      },
      {
        wins: 0,
        currentScore: 0,
        globalScore: 0
      }
    ]
  }

  componentDidMount(){
    this.setState({})
  }

  updateResult = (result) => {
    let temp = this.state.players;
    
    if (result !== 12){
      temp[this.state.playerTurn].currentScore += result;
      this.setState({players: temp})
    }else{
      temp[this.state.playerTurn].currentScore = 0;
      this.setState({playerTurn: this.state.playerTurn ? 0 : 1 , players: temp})
    }
  }

  holdCurrentScore = () => {
    let temp = this.state.players;
    temp.forEach(player => {
      player.globalScore += player.currentScore;
      player.currentScore = 0;
    })
    if (this.state.players[this.state.playerTurn].globalScore >= this.state.pointsToWin)
      this.winner(this.state.playerTurn)
    this.setState({playerTurn: this.state.playerTurn ? 0 : 1 , players: temp})
  }

  newGame = () => {
    let temp = this.state.players;
    temp.forEach(player => {
      player.currentScore = 0;
      player.globalScore = 0;
    })
    this.setState({playerTurn: this.state.playerTurn ? 0 : 1 , players: temp})
  }

  winner = (index) => {
    console.log(this.state.players);
    let temp = this.state.players;
    temp[index].wins++;
    this.setState({names: index ? ["WINNER!","Player 2"] : ["Player 1","WINNER!"], players: temp});
    this.newGame();
  }

  render() {
    return (
      <div className="board-game">

        <GameActions 
          sendResult={this.updateResult} 
          roll={() => this.content.rollAll()}
          reset={this.newGame} 
          hold={this.holdCurrentScore}
        />

        <ScoreBoard 
          players={this.state.players} 
          names={this.state.names} 
          colors={this.state.playerTurn ? ["black","white"] : ["white","black"]}
        />

        <Dices 
          send={this.updateResult} 
          ref={instance => { this.content = instance; }}
        />
      </div>
    )
  }
}
