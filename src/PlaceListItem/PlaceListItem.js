import React from 'react'
import {Link} from 'react-router'
import {Button} from 'react-bootstrap'
import {Grid, Col, Well, Clearfix} from 'react-bootstrap'
import {places, attractions, additionals} from '../Database'
import {connect} from 'react-redux'
import './PlaceListItem.css'

import {ViewMoreButton} from "../PlaceCompare/AttractionView/ViewMoreButton";


const mapStateToProps = state => ({
  attractionsIds: state.attractionsData.attractionsIds,
  placesIds: state.attractionsData.placesIds,
  thingsToCompare: state.attractionAndPlaceData.thingsToCompare,
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
        <Well className="PlaceListItemWell">
          <Col xs={12} className="PlaceListItemResetPadding">
            <Col sm={5} md={3}>
              <div className="PlaceListItemIcon">
                <img src={process.env.PUBLIC_URL + '/images/icons/attractions/' + this.props.attraction.image}/>
                <p>{this.props.attraction.name}</p>
              </div>
            </Col>
            <Col sm={7} md={9} className="PlaceListItemAllPlaces PlaceListItemResetPadding">
              <Col xs={12}>
                {
                  places.filter(
                    place => place.attractions.indexOf(this.props.attraction.id) !== -1
                  ).map(
                    place =>
                      <Col key={place.id}>
                        <div className="PlaceListItemCityName">
                          <Col xs={6} md={4} className="PlaceListItemResetPadding">
                            <p>{place.name}</p>
                          </Col>
                        </div>
                        <div className="PlaceListItemWeather">
                          <Col xs={6} md={4} className="PlaceListItemResetPadding">
                            <p>
                              Price {
                               additionals.find(item => item.placeId === place.id && item.attractionId === this.props.attraction.id).price
                              } zł
                            </p>
                          </Col>
                        </div>
                        <div>
                          <Col xs={6} md={2} className="PlaceListItemResetPadding">
                            {
                              this.props.thingsToCompare.find(
                                thing => {
                                  return (
                                    thing.attraction.id === this.props.attraction.id &&
                                    thing.place.id === place.id
                                  )
                                }
                              ) !== undefined ?
                                <submit className="PlaceListItemButton PlaceListItemButtonRemove" onClick={() =>
                                  this.props.removeAttractionAndPlaceFromCompare
                                  (this.props.attraction, place)}
                                >remove</submit>
                                :
                                this.props.thingsToCompare.length < 3 ?
                                  <submit className="PlaceListItemButton PlaceListItemButtonSelectActive" onClick={() =>
                                    this.props.addAttractionAndPlaceToCompare
                                    (this.props.attraction, place)}
                                  >select</submit>
                                  : <p className="PlaceListItemButton PlaceListItemButtonSelectDisabled">select</p>
                            }
                          </Col>
                        </div>
                        <div>
                          <Col xs={6} md={2} className="PlaceListItemResetPadding">
                            <ViewMoreButton placeName={place.weatherId}/>
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

