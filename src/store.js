import {createStore, combineReducers} from "redux";
import {reducer as attractionsReducer} from "./Form";
import {reducer as attractionAndPlacesReducer} from "./PlaceListItem";


const reducer = combineReducers({
  attractionsData: attractionsReducer,
  attractionAndPlaceData: attractionAndPlacesReducer
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store