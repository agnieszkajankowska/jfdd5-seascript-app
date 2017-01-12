import React from 'react'

class LoginFormView extends React.Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: ''
    }

    this.handleSubmit = (event) => {
      event.preventDefault()


      fetch(
        process.env.PUBLIC_URL + '/users-data/users.json'
      ).then(
        response =>
          response.json()
      ).then(
        data => {
          console.log("xxxxxxx", data)
          return data
        }
      ).then(
        data =>
          data.find(
            data =>  data.name === this.state.username && data.password === this.state.password
          )
      ).then(
        data => {
          return data.id
        }
      ).then(
        userId =>  fetch(process.env.PUBLIC_URL + '/users-data/user-' + userId + '.json').then(
          response => response.json()
        )
      ).then(
        data => console.log(data)
      )

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
      </div>

    )
  }
}

export default LoginFormView