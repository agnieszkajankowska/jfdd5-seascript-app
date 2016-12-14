import React from 'react'

import {Navigation} from './Navigation'
import {
  Navbar,
  Nav,
  NavItem,
  Grid,
  Row,
  Col
} from 'react-bootstrap'

import { places } from '../Database'

import './App.css'
import './Navigation/Navigation.css'

export default (props) => (
      <Grid>
        <Navigation/>
        <Row>
          <Col md={12}>
            {props.children}
          </Col>
        </Row>
      </Grid>
)
