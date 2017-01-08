import React from 'react'
import {connect} from 'react-redux'
import {Grid, Row, Col} from 'react-bootstrap'
import {FavoriteView} from './FavoriteView'
import {additionals} from '../Database'
import './Favorites.css'

const mapStateToProps = state => ({
  chosenToFavoritesAttractions: state.chosenAttractionsToFavoritesData.chosenToFavoritesAttractions
})

const mapDispatchToProps = dispatch => ({
  addAttractionToFavorites: (attraction, place) => dispatch({
    type: 'ADD_ATTRACTION_AND_PLACE_TO_FAVORITES',
    attraction: attraction,
    place: place,
    additional: additionals.find(
      additional => (
        additional.placeId === place.id &&
        additional.attractionId === attraction.id
      ))
  }),
  removeAttractionFromFavorites: (attraction, place) => dispatch({
    type: 'REMOVE_ATTRACTION_AND_PLACE_TO_FAVORITES',
    attraction: attraction,
    place: place,
    additional: additionals.find(
      additional => (
        additional.placeId === place.id &&
        additional.attractionId === attraction.id
      ))
  })
})

const Favorites = props => {
  console.log(props.chosenToFavoritesAttractions)
  return (
    <div>
      <h1 className="favorites-header">Your list of favorites:</h1>
      <Grid>
        <Row>
        {
          props.chosenToFavoritesAttractions.map(
            attraction =>
                <Col xs={12} sm={6} md={4}>
                  <FavoriteView attraction={attraction}
                                addAttractionToFavorites={props.addAttractionToFavorites}
                                removeAttractionFromFavorites={props.removeAttractionFromFavorites}
                                chosenToFavoritesAttractions={props.chosenToFavoritesAttractions}
                  />
                </Col>
          )
        }
        </Row>
      </Grid>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)
