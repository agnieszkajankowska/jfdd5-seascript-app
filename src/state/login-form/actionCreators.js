import {
  FETCH_LOGIN_USER__BEGIN,
  FETCH_LOGIN_USER__SUCCESS,
  FETCH_USER_FAVS

}
  from './actionTypes'

export const fetchLoggedInUser = (username, password) => {
  return (dispatch) => {

    dispatch({
      type: FETCH_LOGIN_USER__BEGIN
    })

    fetch(
      'http://localhost:8000/api/users/login', {
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
        return response.json()
      }
    ).then(
      data => {
        dispatch({
          type: FETCH_USER_FAVS,
          favPlaces: data.favorites
        })
        dispatch({
          type: FETCH_LOGIN_USER__SUCCESS,
          user: data
        })
      }
    ).catch(
      error => console.log(error)
    )
  }
}




