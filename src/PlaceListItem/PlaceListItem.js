import React from 'react'
import {Link} from 'react-router'
import {Button} from 'react-bootstrap'
import {Grid, Col, Well, Clearfix} from 'react-bootstrap'
import {places, attractions, additionals} from '../Database'
import {connect} from 'react-redux'
import './PlaceListItem.css'

const mapStateToProps = state => ({
  attractionsIds: state.attractionsData.attractionsIds,
  placesIds: state.attractionsData.placesIds,
  thingsToCompare: state.attractionAndPlaceData.thingsToCompare
})

const mapDispatchToProps = dispatch => ({
  addAttractionAndPlaceToCompare: (attraction, place) => dispatch({
    type: 'ADD_ATTRACTION_AND_PLACE_TO_COMPARE',
    attraction: attraction,
    place: place,
    additional: additionals.find(
      additional => (
        additional.placeId === place.id &&
        additional.attractionId === attraction.id
      ))
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
    return (
      <Grid>
        <Well>
          <Col xs={12}>
            <Col sm={5} md={3}>
              <div className="PlaceListItemIcon">
                <img src={process.env.PUBLIC_URL + '/images/icons/attractions/' + this.props.attraction.image}/>
                <p>{this.props.attraction.name}</p>
              </div>
            </Col>
            <Col sm={7} md={9}>
              <Col xs={12}>
                {
                  places.filter(
                    place => place.attractions.indexOf(this.props.attraction.id) !== -1
                  ).map(
                    place =>
                      <Col>
                        <div className="PlaceListItemCityName">
                          <Col xs={6} md={4}>
                            <p>{place.name}</p>
                          </Col>
                        </div>
                        <div className="PlaceListItemWeather">
                          <Col xs={6} md={4}>
                            <p>pogoda</p>
                          </Col>
                        </div>
                        <div className="PlaceListItemButton">
                          <Col xs={6} md={2}>
                            {
                              this.props.thingsToCompare.find(
                                thing => {
                                  return (
                                    thing.attraction.id === this.props.attraction.id &&
                                    thing.place.id === place.id
                                  )
                                }
                              ) !== undefined ?
                                <Button className="PlaceListItemButtonRemove" onClick={() =>
                                  this.props.removeAttractionAndPlaceFromCompare
                                  (this.props.attraction, place)}
                                >remove</Button>
                                :
                                this.props.thingsToCompare.length < 3 ?
                                  <Button className="PlaceListItemButtonSelectActive" onClick={() =>
                                    this.props.addAttractionAndPlaceToCompare
                                    (this.props.attraction, place)}
                                  >select</Button>
                                  : <p className="PlaceListItemButtonSelectDisabled">select</p>
                            }
                          </Col>
                        </div>
                        <div className="PlaceListItemButton">
                          <Col xs={6} md={2}>
                            <Link to='/place-details'>
                              <Button className="PlaceListItemButtonSelectDetails">
                                Details
                              </Button>
                            </Link>
                          </Col>
                        </div>
                      </Col>
                  )
                }
              </Col>
            </Col>
          </Col>
          <Clearfix/>
        </Well>

      </Grid>

    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(placeListItem)

