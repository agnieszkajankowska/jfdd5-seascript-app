const initialState = {
  thingsToCompare:[]
}

export default (state=initialState, action) => {
  console.log( action );
  switch (action.type) {
    case 'ADD_ATTRACTION_AND_PLACE':

      // let obj = Object.assign({},state.thingsToCompare, {
      //   thingsToCompare: state.thingsToCompare.concat({
      //     attractionIds: action.attractionId,
      //     placesIds: action.placeId
      //   }
      //   )
      // });
      // console.log( obj );
     // return state;
      return {
        ...state,
        thingsToCompare: state.thingsToCompare.concat({
          attractionIds: action.attractionId,
          placeIds: action.placeId}
        )
      }
    default : return state
  }
}
