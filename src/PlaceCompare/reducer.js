import { FETCH_USER_FAVS } from '../state/login-form/actionTypes'

const initialState = {
  chosenToFavoritesAttractions: []
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
    default : return state
  }
}

