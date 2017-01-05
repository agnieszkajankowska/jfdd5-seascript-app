import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, browserHistory} from "react-router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import "./index.css";
import App from "./App/App";
import {DashboardView} from "./App/DashboardView";
import {Form} from "./Form";
import {PlaceDetails} from "./PlaceDetails";
import {PlaceCompare} from "./PlaceCompare";
import {NotFoundView} from "./NotFoundView";
import {PlaceList} from "./PlaceList";
import {Favorites} from "./Favorites";
import {Provider} from "react-redux";
import store from "./store";


import {fetchWeather,fetchWeatherForecast} from './state/weather/actionCreators'
const fetchWeatherFromApi = () => {
  store.dispatch(fetchWeather('Gdańsk'))
  //store.dispatch(fetchWeatherForecast())
}
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={DashboardView}/>

        <Route path="/form" component={Form}/>
        <Route path="/place-details" component={PlaceDetails} onEnter={fetchWeatherFromApi}/>
        <Route path="/place-compare" component={PlaceCompare}/>
        <Route path="/place-list" component={PlaceList}/>
        <Route path="/favorites" component={Favorites}/>

      </Route>

      <Route path="*" component={NotFoundView}/>
    </Router>
  </Provider>,
  document.getElementById('root')
)
