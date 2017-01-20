import React from "react";
import {Link} from "react-router";
import "./Navigation.css";
import {StepButton} from './StepButton'


class Menu extends React.Component {
  constructor() {
    super()
  }

  render() {

    const urlMap = {
      '/form': 1,
      '/place-list': 2,
      '/place-compare':3,
      '/favorites':4
    }
    
    const currentStepId = urlMap[document.location.pathname];
    
    return (
      <div className="navbar">

        <StepButton for="/form" stepId="1" currentStepId={currentStepId}>
          1. Start
        </StepButton>

        <StepButton for="/place-list" stepId="2" currentStepId={currentStepId}>
          2. Place list
        </StepButton>

        <StepButton for="/place-compare" stepId="3" currentStepId={currentStepId}>
          3. Compare
        </StepButton>
        <button><Link to="/favorites" className="link">Favorites</Link></button>
        <button><Link to="/calendar" className="link">Calendar</Link></button>
      </div>
    )
  }
}

export default Menu