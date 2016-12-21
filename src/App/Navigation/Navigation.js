import React from "react";
import {Link} from "react-router";
import "./Navigation.css";
import Logo from "./logo.svg";


export default () => (
  <div className="nav-bar teaser-look">
    <div className="nav-responsive-panel">
      <img src={Logo} alt="logo"/>
      <button className="nav-button">
        <span className="icon-menu5"/>
      </button>
    </div>

    <ul id="top-menu" className="responsive-menu">
      <li className="grow menu-link">
       <Link to="/place-compare" className="link">Place Compare</Link>
      </li>

      <li className="grow menu-link">
        <Link to="/form" className="link">Form</Link>
      </li>

      <li className="logo grow">
       <Link to="#teaser" className="link">
          <img src={Logo} alt="logo"/>
        </Link>
      </li>

      <li className="grow menu-link">
       <Link to="/place-details" className="link">Place Details</Link>
      </li>

      <li className="grow menu-link">
        <Link to="/favorites" className="link">Favorites</Link>
      </li>

      <li className="grow menu-link">
       <Link to="/" className="link">Place Maps</Link>
      </li>
      <li className="clear" id="blacked"/>
    </ul>
  </div>
)