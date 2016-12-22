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
    default : return state
  }
}

