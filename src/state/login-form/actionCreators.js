import {
  FETCH_LOGGEDIN_USER__BEGIN,
  FETCH_LOGGEDIN_USER__END
}
  from './actionTypes'

export const fetchLoggedInUser = (userName, userPassword) => {
  return (dispatch) => {
    dispatch({
      type: FETCH_LOGGEDIN_USER__BEGIN
    })

    fetch(
      process.env.PUBLIC_URL + '/users-data/users.json'
    ).then(
      response => {
        return response.json()
      }
    ).then(
      data =>
      data.filter(data =>
      data.name === userName && data.password === userPassword
      ).map( data => {
        return data.id
        }
      )
    ).then(
        userId =>fetch( process.env.PUBLIC_URL + '/users-data/user-' + userId + '.json')
      ).then(
        response =>
        response.json()
    ).then(
      data => {
        dispatch({
          type: FETCH_LOGGEDIN_USER__END,
          loggedInUserName: data.name
        })
      }
    ).catch(
      error => console.log(error)
    )
  }
}