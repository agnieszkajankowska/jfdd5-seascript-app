import {
  REMOVE_USER_FAVORITES__BEGIN,
  REMOVE_USER_FAVORITES__SUCCESS,
  REMOVE_USER_FAVORITES__FAILURE
}
  from './actionTypes'


export const removeFromFavorites = (userId, token, favoriteId) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_USER_FAVORITES__BEGIN
    })

    fetch('http://localhost:3001/api/users/' + userId + '/favoriteItems/' + favoriteId + '?access_token=' + token, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(
      response => {
        if (response.status === 204) {
          response.json().then(
            favoriteId =>
              dispatch({
                type: REMOVE_USER_FAVORITES__SUCCESS,
                favoriteItem: favoriteId
              })
          )
        }
        else {
          return response.json().then(
            error => dispatch({type: REMOVE_USER_FAVORITES__FAILURE, error: error})
          )
        }
      }
    )
  }
}

