import React from 'react'
import {connect} from 'react-redux'
import {logIn, logOut} from '../state/login-form/actionCreators'
import {LoginForm} from './'

const mapStateToProps = state => ({
  token: state.logInStatusData.token,
  user: state.logInStatusData.user,
  pending: state.logInStatusData.pending
})

const mapDispatchToProps = dispatch => ({
  fetchUserData: (username, password) => dispatch(logIn(username, password)),
  logOut: (token) => dispatch(logOut(token))
})

class LoginFormView extends React.Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: ''
    }

    this.handleSubmit = (event) => {
      event.preventDefault()
      this.props.fetchUserData(this.state.username, this.state.password)
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Username:
          <input value={this.state.username}
                 type="text"
                 onChange={
                   event => this.setState({
                     username: event.target.value
                   })
                 }/>
          Password:
          <input value={this.state.password}
                 type="text"
                 onChange={
                   event => this.setState({
                     password: event.target.value
                   })
                 }/>
          <button type="submit">Log in</button>
        </form>
        <button type="submit"
                onClick={(event) => {
                  event.preventDefault()
                  this.props.logOut(this.props.token)
                }
                }>Log out
        </button>
        <p>{this.state.username}</p>
        <p>{this.state.password}</p>

        <LoginForm/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormView)