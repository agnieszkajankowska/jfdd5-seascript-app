import React from 'react'

import {Navigation} from './Navigation'
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap'

import { places } from '../Database'

import './App.css'
import './Navigation/Navigation.css'

export default (props) => (
     <div>
        <Navigation {...props}/>
            {props.children}
     </div>
)
