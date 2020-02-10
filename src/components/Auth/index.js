import React, { Component } from 'react'
//import { Link } from "react-router-dom"
import './index.css'

class Auth extends Component {
  render() {
    return (
      <div className="auth">
        <div className="auth-form">
          <img src="/logo.png" />

          <input type="text" className="input input-text" placeholder="username" />
          <input type="password" className="input input-text" placeholder="password" />

          <a href="#" className="input input-btn" >LOG-IN</a>
        </div>
      </div>
    )
  }
}

export default Auth