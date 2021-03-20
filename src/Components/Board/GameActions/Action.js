import React, { Component } from 'react'

export default class Action extends Component {

  callback=()=>{
    this.props.sendRsult(this.props.action)
  }
  
  render() {
    return (
      <div className="action-container">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <button className="glass-btn">
                {this.props.action}
              </button>
            </div>
            <div className="flip-card-back">
              <i 
                className={this.props.icon + " fa-2x"} 
                onClick={this.callback} 
              ></i>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
