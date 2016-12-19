import React from 'react'
import {Link} from 'react-router'
import {Button} from 'react-bootstrap'
import {Grid, Col} from 'react-bootstrap'
import {places, attractions} from '../Database'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
  attractionsIds: state.attractionsData.attractionsIds,
  placesIds: state.attractionsData.placesIds
})

const mapDispatchToProps = dispatch => ({
  chooseAttraction: attractionId => dispatch({type: 'ADD_ATTRACTION', attractionId: attractionId}),

  choosePlace: placeId => dispatch({type: 'ADD_PLACE', placeId: placeId})
})


class placeListItem extends React.Component {
  constructor() {
    super()

  }

  render() {
    return (
      <Grid>
        <Col xs={12}>
          <Col xs={4}>
            <p>{this.props.attraction.name}</p>
          </Col>
          <Col xs={4}>
            <ul>
              {
                places.filter(
                  place => place.attractions.indexOf(this.props.attraction.id) !== -1
                ).map(
                  place =>
                    <div>
                      <li>{place.name}</li>
                      <Button onClick={() => this.props.choosePlace(place.id)}>Compare</Button>
                    </div>
                )
              }
            </ul>
          </Col>
          <Col xs={4}>

          </Col>
        </Col>
      </Grid>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(placeListItem)

