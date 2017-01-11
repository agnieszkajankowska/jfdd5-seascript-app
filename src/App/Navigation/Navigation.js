import React from "react";
import {Link} from "react-router";
import "./Navigation.css";
import FaAngleRight from 'react-icons/lib/fa/angle-right'
import {StepButton} from './StepButton'

import Logo from "./logo.svg";
import {Button} from "react-bootstrap"

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
      <div>
        <StepButton for="/form" stepId="1" currentStepId={currentStepId}>form</StepButton>
        <StepButton for="/place-list" stepId="2" currentStepId={currentStepId}>place list</StepButton>
        <StepButton for="/place-compare" stepId="3" currentStepId={currentStepId}>place compare</StepButton>
        <StepButton for="/favorites" stepId="4" currentStepId={currentStepId}>favorites</StepButton>


        <div className="nav-bar teaser-look">
          <div className="nav-responsive-panel">
            <img src={Logo} alt="logo"/>
            <button className="nav-button">
              <span className="icon-menu5"/>
            </button>
          </div>

          <ul id="top-menu" className="responsive-menu">
            <li className="logo grow">
              <Link to="#teaser" className="link">
                <img src={Logo} alt="logo"/> Wave
              </Link>
            </li>

            <li className="grow menu-link">
              <Link to="/form" className="link">Form <FaAngleRight size={30}/></Link>
            </li>

            <li className="grow menu-link">
              <Link to="/place-list" className="link">Place List <FaAngleRight size={30}/></Link>
            </li>

            <li className="grow menu-link">
              <Link to="/place-compare" className="link">Compare Places <FaAngleRight size={30}/></Link>
            </li>

            {/*<li className="grow menu-link">*/}
            {/*<Link to="/place-details" className="link">Place Details <FaAngleRight size={30} /></Link>*/}
            {/*</li>*/}

            <li className="grow menu-link">
              <Link to="/favorites" className="link">Favorites <FaAngleRight size={30}/></Link>
            </li>

            {/*<li className="grow menu-link">*/}
            {/*<Link to="/" className="link">Place Maps></Link>*/}
            {/*</li>*/}
            <li className="clear" id="blacked"/>
          </ul>
        </div>
      </div>
    )
  }
}

export default Menu
// var breadcrumbs = {'/form':['/form'],'/placelist':['/form','/placelist'],'/place-compare':['/form','/placelist','/place-compare']}