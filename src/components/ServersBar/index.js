import React, { Component } from 'react'
import './index.css'

// Components
import ServerItem from './components/ServerItem'

class ServerBar extends Component {
  render() {
    return (
      <div className="srv-bar">
        <ServerItem img="https://cdn.discordapp.com/icons/543046277785714729/ebb1a86e26a2edb2997517ed9b6f30ac.png?size=128" server="!reoYNiRKnBDbuREbfS:matrix.org" />
        <ServerItem img="https://cdn.discordapp.com/icons/539049966669266954/7102f5edab4180c808b36b71f1d2e8aa.png?size=128" server="test" />
        <ServerItem img="https://cdn.discordapp.com/icons/640191484120924171/b5647fa18c66af929a86250aa195ee3d.png?size=128" server="test" />
      </div>
    )
  }
}

export default ServerBar