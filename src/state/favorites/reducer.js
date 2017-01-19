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
  favoritesItemsIds: []
}

export default (state=initialState, action) => {
  switch (action.type) {
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

