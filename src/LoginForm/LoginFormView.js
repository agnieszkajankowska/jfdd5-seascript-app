import React from 'react'
import {connect} from 'react-redux'
import {fetchLoggedInUser} from '../state/login-form/actionCreators'
import {LoginForm} from './'

const mapStateToProps = state => ({
  user: state.logInStatusData.user,
  pending: state.logInStatusData.pending
})

const mapDispatchToProps = dispatch => ({
  fetchData: (username, password) => dispatch(fetchLoggedInUser(username, password))
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
      this.props.fetchData(this.state.username, this.state.password)
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
        <p>{this.state.username}</p>
        <p>{this.state.password}</p>

        <LoginForm/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormView)