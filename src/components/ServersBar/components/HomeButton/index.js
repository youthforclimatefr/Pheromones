import React, { Component } from 'react'
import './index.css'

class HomeButton extends Component {
  test() {
    console.log(this.props.server)
  }

  render() {
    return (
      <a href="#" onClick={this.test.bind(this)} className="srv-home"></a>
    )
  }
}

export default HomeButton