const initialState =  {
  attractions: []
}

export default ( state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ATTRACTION':
      return {
        ...state,
        attractions: state.attractions.concat(action.attractionId)
      }
    default : return state
  }
}
