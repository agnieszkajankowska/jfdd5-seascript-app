import React from 'react'
import {connect} from 'react-redux'

import './RegistrationFormView.css'
import Loader from 'react-loader'

import {logIn} from '../state/login-form/logIn'
import {logOut} from '../state/login-form/logOut'

import {Grid, Row, Col, Button, Form, FormGroup, ControlLabel, FormControl, Checkbox} from 'react-bootstrap'

const mapStateToProps = state => ({
  user: state.logInStatusData.user,
  pending: state.logInStatusData.pending,
  session: state.logInStatusData.session,
  failure: state.logInStatusData.failure
})

const mapDispatchToProps = dispatch => ({
  logIn: (username, password) => dispatch(logIn(username, password)),
  logOut: (token) => dispatch(logOut(token)),
})

class RegistrationFormView extends React.Component {
  constructor() {
    super()

    this.state = {
      email: '',
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
            email: this.state.email,
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
              <FormControl type="email"
                           placeholder="Email"
                           value={this.state.email}
                           onChange={
                             event => this.setState({
                               email: event.target.value
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

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationFormView)