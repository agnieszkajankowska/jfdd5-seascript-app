import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
import persistState from 'redux-localstorage'
import thunkMiddleware from 'redux-thunk'

import {reducer as attractionsReducer} from "./Form"
import weatherReducer from './state/weather/reduce'
import {reducer as attractionAndPlacesReducer} from "./PlaceListItem";


const reducer = combineReducers({
  attractionsData: attractionsReducer,
  attractionAndPlaceData: attractionAndPlacesReducer,
  weatherData: weatherReducer,
  weatherForecastData: weatherReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(
    thunkMiddleware // lets us dispatch() functions (thunks) in addition to objects with 'type' attribute
  ),
  persistState([])
)

const store = createStore(reducer, enhancer);

export default store