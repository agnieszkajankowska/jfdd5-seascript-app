import {
  REGISTER_USER__BEGIN,
  REGISTER_USER__FAILURE,
  REGISTER_USER__SUCCESS
}
  from './actionTypes'


export const registerUser = (username, email, password) => {
  return (dispatch) => {
    dispatch({
      type: REGISTER_USER__BEGIN
    })
    fetch(
      'https://powerful-fortress-34565.herokuapp.com/api/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password
        })
      }
    ).then(
      response => {
        if (response.status === 200) {
          response.json().then(
            userData => {
              dispatch({
                type: REGISTER_USER__SUCCESS,
                newUser: userData
              })
              console.log(userData)
            }
          )
        }
        if (response.status === 422) {
          console.log("nie udalo sie zarejestrowac uzytkownika")
          dispatch({ type: REGISTER_USER__FAILURE })
        }
      }
    )
  }
}

