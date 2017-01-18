import React from 'react'
import {connect} from 'react-redux'
import {Grid, Row, Col} from 'react-bootstrap'
import {FavoriteView} from './FavoriteView'
import {additionals} from '../Database'
import './Favorites.css'

import {fetchFavorites} from '../state/favorites/fetchFavorites'

const mapStateToProps = state => ({
  chosenToFavoritesAttractions: state.chosenAttractionsToFavoritesData.chosenToFavoritesAttractions,
  favoritesItemsIds: state.chosenAttractionsToFavoritesData.favoritesItemsIds,
  session: state.logInStatusData.session
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
  }),
  fetchFavorites: (userId, token) => dispatch(fetchFavorites(userId, token))
})

class Favorites extends React.Component {

  componentWillMount() {
    this.props.session !== null ?
      this.props.fetchFavorites(this.props.session.userId, this.props.session.id) : ''
  }

  render() {
    return (
      <div>
        <h1 className="favorites-header">Your list of favorites:</h1>
        <Grid>
          <Row>
            {
              this.props.favoritesItemsIds.map(
                attraction =>
                  <Col xs={12} sm={6} md={4}>
                    <FavoriteView attraction={attraction}
                                  addAttractionToFavorites={this.props.addAttractionToFavorites}
                                  removeAttractionFromFavorites={this.props.removeAttractionFromFavorites}
                                  chosenToFavoritesAttractions={this.props.favoritesItemsIds}
                    />
                  </Col>
              )
            }
          </Row>
        </Grid>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)
