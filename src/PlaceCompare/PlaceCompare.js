import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

import {AttractionView} from './AttractionView'

import './PlaceCompare.css'
import './AttractionView/AttractionView.css'

const PlaceCompare = () => {
  return (
    <div>
      <Grid>
        <Row>
          <h1>Compare chosen attractions below:</h1>
        </Row>
        <Row>
        <AttractionView />
        </Row>
      </Grid>
    </div>
  )
}



export default PlaceCompare