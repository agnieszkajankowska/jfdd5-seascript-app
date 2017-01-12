import {
  FETCH_LOGGEDIN_USER__BEGIN,
  FETCH_LOGGEDIN_USER__END
}
  from './actionTypes'

const initialState = {
  user: null
}


export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_LOGGEDIN_USER__BEGIN:
      return state.user = {
      }
    case FETCH_LOGGEDIN_USER__END:
      return state.user = {
        loggedInUsername: action.userName,
        favorites: [],
        reservations:[]
      }
    default:
      return state
  }
}