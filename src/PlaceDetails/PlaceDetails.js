import React from 'react'
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap'

import {ActualWeather} from '../ActualWeather'
import './PlaceDetails.css'

export default () => {
  return (
    <Grid className="place-Details">
        <Row>
            <ActualWeather/>
        </Row>
    </Grid>
  )
}