import { FETCH_USER_FAVS } from '../login-form/actionTypes'
import {
  FETCH_USER_FAVORITES__BEGIN,
  FETCH_USER_FAVORITES__SUCCESS,
  FETCH_USER_FAVORITES__FAILURE,
  ADD_USER_FAVORITES__BEGIN,
  ADD_USER_FAVORITES__FAILURE,
  ADD_USER_FAVORITES__SUCCESS,
  REMOVE_USER_FAVORITES__BEGIN,
  REMOVE_USER_FAVORITES__SUCCESS,
  REMOVE_USER_FAVORITES__FAILURE
}
  from './actionTypes'

const initialState = {
  chosenToFavoritesAttractions: [],
  favoritesItemsIds: []
}

export default (state=initialState, action) => {
  // console.log( "aaaaaaaaaaaaaaaaa", action );
  switch (action.type) {
    case 'ADD_ATTRACTION_AND_PLACE_TO_FAVORITES':
      return {
        ...state,
        chosenToFavoritesAttractions: state.chosenToFavoritesAttractions.concat(
          {
            attraction: action.attraction,
            place: action.place,
            additional: action.additional
          }
        )
      }
    case 'REMOVE_ATTRACTION_AND_PLACE_TO_FAVORITES':
      return {
        ...state,
        chosenToFavoritesAttractions: state.chosenToFavoritesAttractions.filter(
          favorite => (
            favorite.attraction.id !== action.attraction.id ||
            favorite.place.id !== action.place.id
          )
        )
      }
    case FETCH_USER_FAVS:
      return {
        ...state,
        chosenToFavoritesAttractions: action.favPlaces
      }
    case FETCH_USER_FAVORITES__SUCCESS:
      return {
        ...state,
        favoritesItemsIds: action.favoritesItemsIds
      }
    case FETCH_USER_FAVORITES__FAILURE:
      return {
        ...state,
        favoritesItemsIds: []
      }
    case ADD_USER_FAVORITES__SUCCESS:
      return {
        ...state,
        favoritesItemsIds: state.favoritesItemsIds.concat(action.favoriteItem)
      }
    case REMOVE_USER_FAVORITES__SUCCESS:
      return {
        favoritesItemsIds: state.favoritesItemsIds.filter(
          favoriteId =>
          favoriteId.id !== action.favoriteId)
      }
    default : return state
  }
}

