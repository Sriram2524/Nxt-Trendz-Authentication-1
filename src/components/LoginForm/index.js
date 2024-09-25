// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', errMsg: '', isFailure: false}

  onSubmitSuccess = () => {
    const {history} = this.props

    history.replace('/')
  }

  onFailure = errMessage => {
    this.setState({isFailure: true, errMsg: errMessage})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onFailure(data.error_msg)
    }
  }

  onChangeName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  userNameInput = () => {
    const {username} = this.state
    return (
      <>
        <label className="label" htmlFor="userName">
          USERNAME
        </label>
        <input
          type="text"
          placeholder="Username"
          onChange={this.onChangeName}
          className="input"
          id="userName"
          value={username}
        />
      </>
    )
  }

  userPasswordInput = () => {
    const {password} = this.state
    return (
      <>
        <label className="label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          placeholder="Password"
          onChange={this.onChangePassword}
          className="input"
          id="password"
          value={password}
        />
      </>
    )
  }

  render() {
    const {isFailure, errMsg} = this.state
    return (
      <div className="login-con">
        <img
          className="login-img"
          alt="website login"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
        />

        <form onSubmit={this.submitForm} className="formm">
          <img
            className="login-logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
          <img
            className="login-ig"
            alt="website login"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          />
          <div className="input-con">{this.userNameInput()}</div>
          <div className="input-con">{this.userPasswordInput()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          {isFailure && <p className="err-msg">*{errMsg}</p>}
        </form>
      </div>
    )
  }
}
export default LoginForm
