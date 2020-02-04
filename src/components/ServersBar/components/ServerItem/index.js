import React, { Component } from 'react'
import './index.css'

class ServerItem extends Component {
  test() {
    console.log(this.props.server)
  }

  render() {
    return (
      <a href="#" style={{ backgroundImage: `url(${this.props.img})` }} onClick={this.test.bind(this)} className="srv-item"></a>
    )
  }
}

export default ServerItem