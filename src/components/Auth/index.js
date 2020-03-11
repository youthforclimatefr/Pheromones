import React, { Component } from 'react'
import { useHistory } from 'react-router-dom'
import './index.css'

class Auth extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  login() {
    console.log(this.state.username)
    window.client.login('m.login.password', {
      user: this.state.username,
      password: this.state.password
    }).then(response => {
      console.log(response)
      console.log(response)
      document.querySelector('.auth-loading').style.display = 'block'
      this.props.history.push('/app')
    })
  }

  updateInput(evt, val) {
    this.setState({
      [val]: evt.target.value
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
            <input type="text" value={this.state.username} onChange={evt => this.updateInput(evt, 'username')} className="input input-text" placeholder="username" />
            <input type="password" value={this.state.password} onChange={evt => this.updateInput(evt, 'password')} className="input input-text" placeholder="password" />
          </div>

          <a href="#" className="input input-btn" onClick={this.login.bind(this)} >LOG-IN</a>
        </div>
      </div>
    )
  }
}

export default Auth