import React, { Component } from 'react';
import ScoreBoard from './ScoreBoard/ScoreBoard';
import GameActions from './GameActions/GameActions';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
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
    this.setState({});
    this.newGame();
  }

  componentDidUpdate(){
    this.saveData();
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
    let cap;
    temp.forEach(player => {
      player.currentScore = 0;
      player.globalScore = 0;
    })
    this.setState({playerTurn: this.state.playerTurn ? 0 : 1 , players: temp})

    do{
      cap = prompt("Please enter the goal to win (must be a positive integer).",100)
    }while(!this.isNormalInteger(cap))

    this.setState({pointsToWin: cap})
  }

  isNormalInteger = (str) => {
    if(str === null)
      return false;
    str = str.trim();
    if (!str) {
        return false;
    }
    str = str.replace(/^0+/, "") || "0";
    var n = Math.floor(Number(str));
    return n !== Infinity && String(n) === str && n >= 0;
}

  winner = (index) => {
    let temp = this.state.players;
    temp[index].wins++;
    this.setState({players: temp});

    confirmAlert({
      title: `Player ${index+1} won this round!`,
      message: 'Please press "OK" to save and continue to another round or "Cancel to stop playing.',
      buttons: [
        {
          label: 'OK',
          onClick: () => {this.newGame()}
        },
        {
          label: 'Cancel',
          onClick: () => {}
        }
      ]
    })
  }

  saveData = () => {
    localStorage.setItem('storage', JSON.stringify(this.state));
  }

  loadData = () => {
    let storage = localStorage.getItem('storage');
    return JSON.parse(storage);
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
