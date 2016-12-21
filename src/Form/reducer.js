const initialState =  {
  attractionsIds: []
}

export default ( state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ATTRACTION':
      return {
        ...state,
        attractionsIds: state.attractionsIds.concat(action.attractionId)
      }
    case 'REMOVE_ATTRACTION':
      return {
        ...state,
        attractionsIds: state.attractionsIds.filter(
          addAttractionId =>
          addAttractionId !== action.attractionId
        )
      }
    default : return state
  }
}
