import React, { Component } from 'react'

export default class Goal extends Component {

  render() {
    
    return (
      <div className="goal-container">
        <div className="position-input">
          <input className="goal glass blue-b" type="number" defaultValue="100"/>
        </div>
      </div>
    )
  }
}
