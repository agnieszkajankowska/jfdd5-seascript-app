import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

import {places, attractions} from './data'

import {AttractionView} from './AttractionView'


export default () => (
  <div>
    <Grid>
      <Row>
        <Col xs={12}>
          <h1>List of chosen attractions</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={3}>
          <p>Price:</p>
          <p>City:</p>
          <p>Available:</p>
          <p>Children:</p>
          <p>Description:</p>
          <p>Ranking:</p>
          <p>Opinions:</p>
          <p>Other sports available:</p>
          <p>Favorites:</p>
          <p>Reservation:</p>
        </Col>
        {
          places.map(
            place => <Col xs={12} md={3}><AttractionView place={place}/></Col>
          )
        }
      </Row>
    </Grid>
  </div>
)