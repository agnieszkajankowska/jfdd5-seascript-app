const initialState = {
  thingsToCompare:[]
}

export default (state=initialState, action) => {
  console.log( action );
  switch (action.type) {
    case 'ADD_ATTRACTION_AND_PLACE':
      return {
        ...state,
        thingsToCompare: state.thingsToCompare.concat({
          attraction: action.attraction,
          place: action.place}
        )
      }
    default : return state
  }
}
