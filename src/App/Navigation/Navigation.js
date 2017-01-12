import React from "react";
import {Link} from "react-router";
import "./Navigation.css";
import FaAngleRight from 'react-icons/lib/fa/angle-right'

import Logo from "./logo.svg";
import {Button} from "react-bootstrap"

import {LoginForm} from '../../LoginForm'

export default () => (
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

      <li className="grow menu-link">
        <Link to="/login-form" className="link">Login Form<FaAngleRight size={30}/></Link>
      </li>

      <li>
        <LoginForm/>
      </li>

      {/*<li className="grow menu-link">*/}
      {/*<Link to="/" className="link">Place Maps></Link>*/}
      {/*</li>*/}
      <li className="clear" id="blacked"/>
    </ul>

  </div>
)