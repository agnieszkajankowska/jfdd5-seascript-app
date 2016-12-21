import {createStore, combineReducers} from "redux";
import {reducer as attractionsReducer} from "./Form";
import {reducer as attractionAndPlacesReducer} from "./PlaceListItem";
import {reducer as chosenAttractionReducer} from "./PlaceCompare"

const reducer = combineReducers({
  attractionsData: attractionsReducer,
  attractionAndPlaceData: attractionAndPlacesReducer,
  chosenAttractionData: chosenAttractionReducer

});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store