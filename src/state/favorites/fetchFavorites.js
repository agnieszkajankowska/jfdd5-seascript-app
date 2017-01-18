import {
  FETCH_USER_FAVORITES__BEGIN,
  FETCH_USER_FAVORITES__SUCCESS,
  FETCH_USER_FAVORITES__FAILURE
}
  from './actionTypes'


export const fetchFavorites = (userId, token) => {
  return (dispatch) => {
    dispatch({
      type: FETCH_USER_FAVORITES__BEGIN
    })

    fetch(
      'http://localhost:3001/api/users/' + userId + '/favoriteItems?access_token=' + token
    ).then(
      response => {
        if (response.status === 200) {
          response.json().then(
            favoriteItems => dispatch({
              type: FETCH_USER_FAVORITES__SUCCESS,
              favoritesItemsIds: favoriteItems
            })
          )
        }
        if (response.status === 401) {
          dispatch({type: FETCH_USER_FAVORITES__FAILURE})
        }
      }
    )
  }
}