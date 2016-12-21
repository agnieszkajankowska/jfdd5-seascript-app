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
    default : return state
  }
}
