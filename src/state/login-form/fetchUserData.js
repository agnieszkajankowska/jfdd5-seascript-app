import {
  FETCH_USER_DATA__BEGIN,
  FETCH_USER_DATA__SUCCESS,
  FETCH_USER_DATA__FAIL
} from './actionTypes'


export const fetchUser = (userId, token) => {
  return (dispatch) => {
    dispatch({ type: FETCH_USER_DATA__BEGIN })
    fetch('http://localhost:3001/api/users/' + userId + '?access_token=' + token
    ).then(
      response => {
        console.log(response)
        if (response.status === 200) {
          response.json().then(
          userData => dispatch ({
            type: FETCH_USER_DATA__SUCCESS, userData: userData
          })
          )
        }
        if (response.status === 401) {
          dispatch({ type: FETCH_USER_DATA__FAIL })
        }
      }
    )
  }
}