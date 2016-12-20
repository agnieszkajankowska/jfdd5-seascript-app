const initialState =  {
  attractionsIds: [],
  placesIds: []
}

export default ( state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ATTRACTION':
      return {
        ...state,
        attractionsIds: state.attractionsIds.concat(action.attractionId)
      }
    case 'ADD_PLACE':
      return {
        ...state,
        placesIds: state.placesIds.concat(action.placeId)
      }
    default : return state
  }
}
