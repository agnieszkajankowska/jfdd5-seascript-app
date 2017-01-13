import {
  FETCH_LOGGEDIN_USER__BEGIN,
  FETCH_LOGGEDIN_USER__END
}
  from './actionTypes'

export const fetchLoggedInUser = (username, password) => {
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
      data.find(data =>
      data.name === username && data.password === password
      )
    ).then(
        data => {
          return data.id
        }
      ).then(
        userId =>fetch( process.env.PUBLIC_URL + '/users-data/user-' + userId + '.json')
      ).then(
        response =>
        response.json()
    ).then(
      data => {
        dispatch({
          type: FETCH_LOGGEDIN_USER__END,
          user: data
        })
      }
    ).catch(
      error => console.log(error)
    )
  }
}




