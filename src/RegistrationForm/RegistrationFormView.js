import React from 'react'
import {connect} from 'react-redux'

import './RegistrationFormView.css'
import Loader from 'react-loader'

import {registerUser} from '../state/register-form/registerUser'

import {Grid, Row, Col, Button, Form, FormGroup, ControlLabel, FormControl, Checkbox} from 'react-bootstrap'

const mapStateToProps = state => ({
  newUser: state.registerStatusData.newUser,
  pending: state.registerStatusData.pending,
  success: state.registerStatusData.success,
  failure: state.registerStatusData.failure,
  session: state.logInStatusData.session
})

const mapDispatchToProps = dispatch => ({
  registerUser: (username, email, password) => dispatch(registerUser(username, email, password))
})

class RegistrationFormView extends React.Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: '',
      username: '',
      confirmPassword: ''
    }

    this.handleSubmit = (event) => {
      event.preventDefault()
      this.props.registerUser(this.state.username, this.state.email, this.state.password)
    }

  }

  render() {
    return (
      <div>

        <Form horizontal onSubmit={this.handleSubmit}>
          <FormGroup controlId="formHorizontalEmail" className="register-form-username">
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

          <FormGroup controlId="formHorizontalEmail">
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

          <FormGroup controlId="formHorizontalPassword">
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


          {this.state.password !== this.state.confirmPassword ?
            <FormGroup controlId="formHorizontalPassword" validationState="error">
              <Col sm={8} smOffset={2}>
                <FormControl type="password"
                             placeholder="Confirm password"
                             value={this.state.confirmPassword}
                             onChange={
                               event => this.setState({
                                 confirmPassword: event.target.value
                               })
                             }/>
              </Col>
            </FormGroup> :
            <FormGroup controlId="formHorizontalPassword">
              <Col sm={8} smOffset={2}>
                <FormControl type="password"
                             placeholder="Confirm password"
                             value={this.state.confirmPassword}
                             onChange={
                               event => this.setState({
                                 confirmPassword: event.target.value
                               })
                             }/>
              </Col>
            </FormGroup> }

          <FormGroup>
            <Col xs={12}>
              <button type="submit" className="submit-button">
                Register
              </button>
            </Col>
          </FormGroup>

          {this.props.failure === true ? <p className="register-message">Username or password already taken. Try something else.</p> : ''}
          {this.props.success === true && this.props.pending === false ? <p className="register-message">Thanks for signing up {this.props.newUser.username}!
            Now you can sign in and start searching for water sports:)</p> : ''}
          <div className="loader-container">
            <Loader loaded={!this.props.pending} color="#fff"/>
          </div>
        </Form>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationFormView)