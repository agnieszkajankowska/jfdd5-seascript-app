import React from 'react'
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap'

import {connect} from 'react-redux'
import {ActualWeather} from '../ActualWeather'
import './PlaceDetails.css'

const mapStateToProps = state => ({

})

export default () => {
  return (
    <Grid className="place-Details">
        <Row>
            <ActualWeather.actualWeather/>
        </Row>
    </Grid>
  )
}