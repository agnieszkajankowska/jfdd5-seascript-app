import {
  ADD_USER_FAVORITES__BEGIN,
  ADD_USER_FAVORITES__SUCCESS,
  ADD_USER_FAVORITES__FAILURE
}
from './actionTypes'


export const addToFavorites = (userId, token) => {
  return (dispatch) =>
  {
    dispatch({
      type: ADD_USER_FAVORITES__BEGIN
    })

  }
}
