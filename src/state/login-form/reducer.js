import {
  FETCH_LOGIN_USER__BEGIN,
  FETCH_LOGIN_USER__SUCCESS
}
  from './actionTypes'

const initialState = {
  user: null,
  pending: false
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_LOGIN_USER__BEGIN:
      return {
        ...state,
        pending: true
      }
    case FETCH_LOGIN_USER__SUCCESS:
      return {
        ...state,
        user: action.user,
        pending: false
      }
    default:
      return state
  }
}