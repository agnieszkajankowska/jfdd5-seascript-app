import React from "react";
import {Link} from "react-router";
import {connect} from 'react-redux'

import "./Navigation.css";
import {StepButton} from './StepButton'

// const mapStateToProps = state => ({
//   session: state.logInStatusData.session
// })

class Navigation extends React.Component {
  constructor() {
    super()
  }

  render() {

    const urlMap = {
      '/form': 1,
      '/place-list': 2,
      '/place-compare':3,
      '/favorites':4,
      '/calendar':5,
      '/login-form':6,
      '/registration':7
    }

    const currentStepId = urlMap[document.location.pathname];

    return (
      <div>
        <StepButton for="/form" stepId="1" currentStepId={currentStepId}>form</StepButton>
        <StepButton for="/place-list" stepId="2" currentStepId={currentStepId}>place list</StepButton>
        <StepButton for="/place-compare" stepId="3" currentStepId={currentStepId}>place compare</StepButton>


        <button><Link to="/favorites" className="link">Favorites</Link></button>
        <button><Link to="/calendar" className="link">Calendar</Link></button>

        <button><Link to="/login-form" className="link">Log in</Link></button>
        <button><Link to="/registration" className="link">Registration</Link></button>

      </div>
    )
  }
}

export default Navigation

// export default connect(mapStateToProps)(Navigation)

// {this.props.session !== null ?
//   <li className="grow menu-link">
//     <Link to="/favorites" className="link">Favorites <FaAngleRight size={30}/></Link>
//   </li> : "" }
