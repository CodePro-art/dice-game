import React, { Component } from 'react'

export default class Action extends Component {
  render() {
    return (
      <div className="action-container">
        <i className={this.props.icon}></i>
        <button className="glass-btn">{this.props.action}</button>
      </div>
    )
  }
}
