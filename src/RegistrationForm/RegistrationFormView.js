import React from 'react'

import './RegistrationFormView.css'

import {Grid, Row, Col, Button, Form, FormGroup, ControlLabel, FormControl, Checkbox} from 'react-bootstrap'

class RegistrationFormView extends React.Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: ''
    }

    this.handleSubmit = (event) => {
      event.preventDefault()
      fetch(
        'https://powerful-fortress-34565.herokuapp.com/api/users/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: this.state.username,
            password: this.state.password
          })
        }
      ).then(
        response => {
          if (response.status == '422') {
            console.log("nie udalo sie zarejestrowac uzytkownika")
          }
          else {
            return response.json()
          }
        }
      ).then(
        userData => {
          console.log(userData)
        }
      ).catch(
        error => console.log(error)
      )
    }
  }

  render() {
    return (
      <div>

        <Form horizontal onSubmit={this.handleSubmit}>
          <FormGroup controlId="formHorizontalEmail" className="login-form-username">

            <Col sm={8} smOffset={2}>
              <FormControl type="text"
                           placeholder="Username"
                           value={this.state.username}
                           onChange={
                             event => this.setState({
                               username: event.target.value
                             })
                           }/>
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword" className="login-form-password">
            <Col sm={8} smOffset={2}>
              <FormControl type="password"
                           placeholder="Password"
                           value={this.state.password}
                           onChange={
                             event => this.setState({
                               password: event.target.value
                             })
                           }/>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col xs={12}>
              <button type="submit" className="submit-button">
                Register
              </button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default RegistrationFormView