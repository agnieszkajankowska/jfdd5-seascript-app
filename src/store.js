import {createStore, combineReducers} from "redux";
import {reducer as attractionsReducer} from "./Form";


const reducer = combineReducers({
  attractionsData: attractionsReducer
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store