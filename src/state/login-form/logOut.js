import {
  LOG_OUT_SUCCESS,
  LOG_OUT_FAIL,
  LOG_OUT_BEGIN
} from './actionTypes'

export const logOut = (token) => {
  return (dispatch) => {
    fetch('http://localhost:3001/api/users/logout?access_token=' + token, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(
      response => {
        if (response.status === 204) {
          dispatch({type: LOG_OUT_SUCCESS})
        }
        else {
          dispatch({type: LOG_OUT_FAIL})
        }
      }
    )
  }
}