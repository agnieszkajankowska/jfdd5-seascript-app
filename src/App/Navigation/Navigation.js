import React from "react";
import {Link} from "react-router";
import {connect} from 'react-redux';
import {Col} from 'react-bootstrap'


import "./Navigation.css";
import {StepButton} from './StepButton'
import {logOut} from '../../state/login-form/logOut'

const mapStateToProps = state => ({
  session: state.logInStatusData.session
})

const mapDispatchToProps = dispatch => ({
  logOut: (token) => dispatch(logOut(token))
})

class Navigation extends React.Component {
  constructor() {
    super()
  }

  render() {

    const urlMap = {
      '/form': 1,
      '/place-list': 2,
      '/place-compare': 3,
      '/favorites': 4,
      '/calendar': 5,
      '/login-form': 6,
      '/registration': 7
    }

    const currentStepId = urlMap[this.props.location.pathname];


    console.log(this.props.location.pathname, currentStepId)
    return (
      <div className="navbar">

        <Col xs="1"/>
        <Col xs="1" className="NavigationLogo">
          <Link to="/">
            <img src={process.env.PUBLIC_URL + '/images/logo.svg'}/>
          </Link>
        </Col>
        <Col xs="4">
          <div className="navigation">
            <StepButton for="/form" stepId="1" currentStepId={currentStepId} className="NavigationStepButton">
              1. Start
            </StepButton>
            <StepButton for="/place-list" stepId="2" currentStepId={currentStepId} className="NavigationStepButton">
              2. Place list
            </StepButton>
            <StepButton for="/place-compare" stepId="3" currentStepId={currentStepId} className="NavigationStepButton">
              3. Compare
            </StepButton>
          </div>
        </Col>

        <Col xs="1"/>

        <Col xs="4">
          {this.props.session !== null ?
            <Link to="/favorites" className="link">
              <button className="ButtonAfterLog">Favorites</button>
            </Link> : ''
          }
          {this.props.session !== null ?
            <Link to="/calendar" className="link">
              <button className="ButtonAfterLog">Calendar</button>
            </Link> : ''
          }

          {this.props.session === null ?
            <Link to="/login-form" className="link">
              <button className="ButtonAfterLog"
                      onClick={() => {
                        window.location.reload()
                      }}>
                Sign in
              </button>
            </Link> :
            <Link to="/" className="link">
              <button type="submit"
                      className="ButtonAfterLog"
                      onClick={() => {
                        this.props.logOut(this.props.session.id)
                        window.location.reload()
                      }
                      }>Sign out
              </button>
            </Link>
          }
        </Col>
        <Col xs="1"/>
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Navigation)


