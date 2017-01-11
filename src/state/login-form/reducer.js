import {
  FETCH_LOGGEDIN_USER__BEGIN,
  FETCH_LOGGEDIN_USER__END
} from './actionTypes'

const initialState = {
  loggedInUser: '',
  pending: false
}


export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_LOGGEDIN_USER__BEGIN:
      return {
        ...state,
        pending: true
      }
    case FETCH_LOGGEDIN_USER__END:
      return {
        ...state,
        loggedInUser: action.loggedInUserProfile,
        pending: false
      }
    default:
      return state
  }
}