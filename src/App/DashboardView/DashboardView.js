import React from 'react'
import {Button} from "react-bootstrap"
import Logo from "../Navigation/logo.svg"
import './DashboardView.css'
import {Link} from 'react-router'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
  user: state.logInStatusData.user,
  pending: state.logInStatusData.pending,
  session: state.logInStatusData.session,
  failure: state.logInStatusData.failure
})

class DashboardView extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <div className="bla">
          <img src={Logo} alt="logo" className="logo-dashboard"/>
        </div>
        {this.props.user !== null ?
          <div>
            <h1 className="title-dashboard">Hey {this.props.user.username}! Welcome to Wave.</h1>
            < h2 > The world's first-class water sports & leisure app</h2>
            <h3>Choose the water sports in the{' '}
              <Link to='/form'>
                <Button bsStyle="primary" bsSize="large">Form</Button>
              </Link> and follow the arrows.</h3>
            <h3>Check out your reservations{' '}
              <Link to='/calendar'>
                <Button bsStyle="primary" bsSize="large">Calendar</Button>
              </Link>
            </h3>
            <h3>Maybe you want to see your{' '}
              <Link to='/form'>
                <Button bsStyle="primary" bsSize="large">Favorites</Button>
              </Link>spots.
              favorite spots?</h3>
          </div>
          :
          <div>
            <h1 className="title-dashboard">Wave</h1>
            <h2>The world's first-class water sports & leisure app</h2>
            <h3>Choose the water sports in the{' '}
              <Link to='/form'>
                <Button bsStyle="primary" bsSize="large">Form</Button>
              </Link> and follow the arrows</h3>
          </div>
        }
      </div>
    )
  }
}

export default connect(mapStateToProps)(DashboardView)

