import {
  FETCH_LOGIN_USER__BEGIN,
  FETCH_LOGIN_USER__SUCCESS,
  FETCH_LOGIN_USER__FAILURE,
  RECEIVE_USER,
  LOGOUT_SUCCESS
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
        token: action.token,
        pending: false
      }
    case FETCH_LOGIN_USER__FAILURE:
      return {
        ...state,
        user: null,
        pending: false
      }
    case RECEIVE_USER:
      return {
        user: action.user
      }
    case LOGOUT_SUCCESS:
      return {
        user: null
    }
    default:
      return state
  }
}