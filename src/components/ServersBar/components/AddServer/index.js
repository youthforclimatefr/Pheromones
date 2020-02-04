import React, { Component } from 'react'
import './index.css'

class ServerItem extends Component {
  addServer() {
    console.log('Add Server')
  }

  render() {
    return (
      <a href="#" onClick={this.addServer} className="srv-add"></a>
    )
  }
}

export default ServerItem