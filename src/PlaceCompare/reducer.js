const initialState = {
  chosenToFavoritesAttractions: []
}

export default (state=initialState, action) => {
  console.log( action );
  switch (action.type) {
    case 'ADD_ATTRACTION_AND_PLACE_TO_FAVORITES':
      return {
        ...state,
        chosenToFavoritesAttractions: state.chosenToFavoritesAttractions.concat(
          {
            attraction: action.attraction,
            place: action.place
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
    default : return state
  }
}

