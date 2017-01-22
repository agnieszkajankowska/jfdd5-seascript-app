import React from 'react'
import {connect} from 'react-redux'
import {logOut} from '../state/login-form/logOut'
import {logIn} from '../state/login-form/logIn'
import Loader from 'react-loader'
import {WelcomeView} from '../WelcomeUserView/'
import {DashboardView} from '../App/DashboardView'

import {RegistrationFormView} from '../RegistrationForm'

import {Grid, Row, Col, Button, Form, FormGroup, ControlLabel, FormControl, Checkbox} from 'react-bootstrap'
import './LoginFormView.css'

const mapStateToProps = state => ({
  user: state.logInStatusData.user,
  pending: state.logInStatusData.pending,
  session: state.logInStatusData.session,
  failure: state.logInStatusData.failure
})

const mapDispatchToProps = dispatch => ({
  logIn: (username, password) => dispatch(logIn(username, password)),
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
      this.props.logIn(this.state.username, this.state.password)
    }
  }

  render() {
    return (
      this.props.session === null ?
      <div className="login-form container-fluid">
        <Grid>
          <Row>
            <Col xs={12} sm={6}>
              <h2 className="login-header">I have an account</h2>
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
                      Sign in
                    </button>
                  </Col>
                </FormGroup>
                {this.props.failure === true ? <p className="login-failure-message">Incorrect username or password</p> : ''}
                <div className="loader-container">
                <Loader loaded={!this.props.pending} color="#fff"/>
                  </div>
              </Form>
            </Col>
            <Col xs={12} sm={6}>
              <h2 className="registration-header">New user</h2>
              <RegistrationFormView />
              </Col>
          </Row>
        </Grid>
      </div> : <DashboardView/>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormView)