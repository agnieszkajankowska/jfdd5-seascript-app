import React from 'react'
import {Link} from 'react-router'
import {Button} from 'react-bootstrap'
import {Grid, Col} from 'react-bootstrap'
import {places, attractions} from '../Database'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
  attractionsIds: state.attractionsData.attractionsIds,
  placesIds: state.attractionsData.placesIds,
  thingsToCompare: state.attractionAndPlaceData.thingsToCompare
})

const mapDispatchToProps = dispatch => ({
  addAttractionAndPlaceToCompare: (attraction, place) => dispatch({
    type: 'ADD_ATTRACTION_AND_PLACE_TO_COMPARE',
    attraction: attraction,
    place: place
  }),
  removeAttractionAndPlaceFromCompare: (attraction, place) => dispatch({
    type: 'REMOVE_ATTRACTION_AND_PLACE_FROM_COMPARE',
    attraction: attraction,
    place: place
  })

})


class placeListItem extends React.Component {
  constructor() {
    super()

  }

  render() {
    console.log(this.props.attraction.id)
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
                      {
                        this.props.thingsToCompare.find(
                          thing => {
                            return (
                              thing.attraction.id === this.props.attraction.id &&
                              thing.place.id === place.id
                            )
                          }
                        ) !== undefined ?
                          <Button onClick={() =>
                          this.props.removeAttractionAndPlaceFromCompare
                          (this.props.attraction, place)}
                          >remove</Button>
                          :
                          this.props.thingsToCompare.length < 3 ?
                            <Button onClick={() =>
                            this.props.addAttractionAndPlaceToCompare
                            (this.props.attraction, place)}
                            >Compare</Button>
                            : null
                      }
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



