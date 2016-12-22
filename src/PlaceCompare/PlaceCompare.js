import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

import {connect} from 'react-redux'

import {AttractionView} from './AttractionView'

const mapStateToProps = state => ({
  thingsToCompare: state.attractionAndPlaceData.thingsToCompare,
})

const PlaceCompare = (props) => {

  const theLowestPrice = 100 // props.thingsToCompare.reduce((prev, next) => prev < next.price ? prev : next.price, Infinity)
  return (
    <div>
      <Grid>
        <Row>
          <Col xs={12}>
            <h1>List of chosen attractions</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={3}>
            <p>Activity:</p>
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
            props.thingsToCompare.map(
              thing =>
                <Col xs={12} md={3}>
                  <AttractionView thing={thing}
                                  theLowestPrice={theLowestPrice}
                  />
                </Col>
            )
          }
        </Row>
      </Grid>
    </div>
  )
}

export default connect(mapStateToProps)(PlaceCompare)