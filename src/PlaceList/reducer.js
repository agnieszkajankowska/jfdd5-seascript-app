const initialState = {
  mapData: []
}

export default (state=initialState, action) => {
  switch (action.type) {
    case 'SHOW_MAP':
      return {
        ... state,
        mapData: state.mapData.concat({
          isMapVisible: true
        }),
      }
    case 'HIDE_MAP':
      return {
        ... state,
        mapData: state.mapData.concat({
          isMapVisible: false
        }),
      }
    default :
      return {
        ...state,
        mapData: state.mapData.concat({
          isMapVisible: false
        }),
      }
  }
}

