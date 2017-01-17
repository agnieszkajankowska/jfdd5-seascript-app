import {
  FETCH_LOGIN_USER__BEGIN,
  FETCH_LOGIN_USER__SUCCESS,
  FETCH_LOGIN_USER__FAILURE
}
from './actionTypes'


export const logIn = (username, password) => {
  return (dispatch) => {

    dispatch({
      type: FETCH_LOGIN_USER__BEGIN
    })

    fetch(
      'http://localhost:3001/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      }
    ).then(
      response => {
        if (response.status == '401') {
          dispatch({
            type: FETCH_LOGIN_USER__FAILURE
          })
        }
        else {
          return response.json()
        }
      }
    ).then(
      session => {
        dispatch({
          type: FETCH_LOGIN_USER__SUCCESS,
          session: session
        })
      }
    )
  }
}
