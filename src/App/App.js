import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router'
import {
  Navbar,
  Nav,
  NavItem,
  Grid,
  Row,
  Col
} from 'react-bootstrap'

import { Places } from '../Database'

import './App.css'


export default (props) => (
      <Grid>
        <Navbar collapseOnSelect fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">WiP Menu</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Collapse>
            <Nav>
              <LinkContainer to="/">
                <NavItem eventKey={0} href="#">Place Compare</NavItem>
              </LinkContainer>

              <LinkContainer to="/">
                <NavItem eventKey={1} href="#">Form</NavItem>
              </LinkContainer>

              <LinkContainer to="/place-details">
                <NavItem eventKey={2} href="#">Place Details</NavItem>
              </LinkContainer>

              <LinkContainer to="/">
                <NavItem eventKey={3} href="#">Place Maps</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Row>
          <Col md={12}>
            {props.children}
          </Col>
        </Row>
      </Grid>
)
