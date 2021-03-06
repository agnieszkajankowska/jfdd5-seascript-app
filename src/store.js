import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
import persistState from 'redux-localstorage'
import thunkMiddleware from 'redux-thunk'

import {reducer as attractionsReducer} from "./Form"
import weatherReducer from './state/weather/reduce'
import {reducer as attractionAndPlacesReducer} from "./PlaceListItem";
import {reducer as chosenAttractionReducer} from "./PlaceCompare";
import {reducer as placeListReducer} from "./PlaceList";
import makeReservationReducer from "./state/reservation/reducer";
import loginFormReducer from './state/login-form/reducer'
import registerFormReducer from './state/register-form/reducer'

const reducer = combineReducers({
  attractionsData: attractionsReducer,
  attractionAndPlaceData: attractionAndPlacesReducer,
  isAMap: placeListReducer,
  weatherData: weatherReducer,
  weatherForecastData: weatherReducer,
  chosenAttractionsToFavoritesData: chosenAttractionReducer,
  makeReservationData: makeReservationReducer,
  logInStatusData: loginFormReducer,
  registerStatusData: registerFormReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(
    thunkMiddleware // lets us dispatch() functions (thunks) in addition to objects with 'type' attribute
  ),
  // persistState([])
)

const store = createStore(reducer, enhancer);

export default store