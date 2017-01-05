const initialState = {
  showMap: false
}

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case 'showMap':
      console.log('dupa');
      return {
        ... state,
        showMap: true,

      }
    case 'hideMap':
      return {
        ... state,
        showMap: false
      }
    default :
      return state
  }
}

