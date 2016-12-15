import React from 'react'
import {
  Row,
  Col
} from 'react-bootstrap'

import {ActualWeather} from '../ActualWeather'

export default () => {
  return (
    <div>
      <h1>Jestem w sekcji Place Details</h1>
      <row>
        <Col md={6}>
          <ActualWeather/>
        </Col>
      </row>
    </div>
  )
}