import React, { Component } from 'react'
import './index.css'

class GroupItem extends Component {
  test() {
    console.log(this.props)
  }

  render() {
    return (
      <a href="#" onClick={this.test.bind(this)} className="group-item">
        <div style={{ backgroundImage: `url(${this.props.img})` }} />
        <span>{this.props.title.slice(0, 21)}</span>
      </a>
    )
  }
}

export default GroupItem