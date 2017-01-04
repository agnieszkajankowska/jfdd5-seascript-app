import React from 'react'
import {Thumbnail} from "react-bootstrap"
import Logo from "../Navigation/logo.svg"
import './DashboardView.css'

export default () => (
  <div className="dashboard">
    <img src={Logo} alt="logo" className="logo-dashboard"/>
    <h1 className="title-dashboard">Wave</h1>
    <h2>The world's first-class water sports & leisure app</h2>
    <h3>Choose the water sports in the Form Tab and follow the arrows</h3>
  </div>
)

