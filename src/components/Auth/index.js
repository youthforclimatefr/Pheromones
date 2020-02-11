import React, { Component } from 'react'
import { useHistory } from 'react-router-dom'
import './index.css'

class Auth extends Component {
  login() {
    const username = ''
    const password = ''
  
    window.client.login('m.login.password', {
      user: username,
      password: password
    }).then(response => {
      console.log(response)
      console.log(response)
      document.querySelector('.auth-loading').style.display = 'block'
      this.props.history.push('/app')
    })
  }

  render() {
    return (
      <div className="auth">
        <div className="auth-loading">
          <img src="/loader.svg" />
        </div>
        <div className="auth-form">
          <img src="/logo.png" />

          <div className="auth-form-inputs">
            <input type="text" className="input input-text" placeholder="username" />
            <input type="password" className="input input-text" placeholder="password" />
          </div>

          <a href="#" className="input input-btn" onClick={this.login.bind()} >LOG-IN</a>
        </div>
      </div>
    )
  }
}

export default Auth