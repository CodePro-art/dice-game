import React, { Component } from 'react'

let enable = true;
export default class Action extends Component {

  
  callback=()=>{
    if (enable)
      this.props.sendResult(this.props.action)
    
    enable = false;
    setTimeout(()=>{
      enable = true
    },1000)
  }

  render() {
    return (
      <div className="action-container">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <button className="glass-btn" >
                {this.props.action}
              </button>
            </div>
            <div className="flip-card-back">
              <i className={this.props.icon + " fa-2x"} onClick={this.callback}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
