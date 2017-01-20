import {compose, createStore, combineReducers, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import {reducer as attractionsReducer} from "./Form";
import weatherReducer from "./state/weather/reduce";
import {reducer as attractionAndPlacesReducer} from "./PlaceListItem";
import {reducer as chosenAttractionReducer} from "./PlaceCompare";
import {reducer as placeListReducer} from "./PlaceList";
import makeReservationReducer from "./state/reservation/reducer";
import persistState from "redux-localstorage";

const reducer = combineReducers({
  attractionsData: attractionsReducer,
  attractionAndPlaceData: attractionAndPlacesReducer,
  isAMap: placeListReducer,
  weatherData: weatherReducer,
  weatherListData: weatherReducer,
  weatherForecastData: weatherReducer,
  chosenAttractionsToFavoritesData: chosenAttractionReducer,
makeReservationData: makeReservationReducer
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