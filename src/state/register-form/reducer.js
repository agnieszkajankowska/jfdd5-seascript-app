import {
  REGISTER_USER__SUCCESS,
  REGISTER_USER__FAILURE,
  REGISTER_USER__BEGIN
}
  from './actionTypes'

const initialState = {
  newUser: null,
  pending: false,
  failure: false,
  success: false
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case REGISTER_USER__BEGIN:
      return {
        ...state,
        pending: true,
      }
    case REGISTER_USER__SUCCESS:
      return {
        ...state,
        newUser: action.newUser,
        pending: false,
        success: true
      }
    case REGISTER_USER__FAILURE:
      return {
        newUser: null,
        pending: false,
        failure: true
      }
    default:
      return state
  }
}