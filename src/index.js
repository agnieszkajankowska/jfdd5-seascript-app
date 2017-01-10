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
import {CalendarView} from "./CalendarView";
import {Provider} from "react-redux";
import store from "./store";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {fetchWeather} from "./state/weather/actionCreators";
const fetchWeatherFromApi = () => {
  store.dispatch(fetchWeather())
}
const fetchWeatherForList = () => {
  console.log(store.getState())
  store.getState()
  console.log(store.attractionsData)
  store.dispatch(fetchWeather('Seattle'))
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={DashboardView}/>

        <Route path="/form" component={Form}/>
        <Route path="/place-details/:placeName" component={PlaceDetails} onEnter={fetchWeatherFromApi}/>
        <Route path="/place-compare" component={PlaceCompare}/>
        <Route path="/place-list" component={PlaceList} onEnter={fetchWeatherForList}/>

        <Route path="/favorites" component={Favorites}/>

        <Route path="/calendar" component={CalendarView} />

      </Route>

      <Route path="*" component={NotFoundView}/>
    </Router>
  </Provider>,
  document.getElementById('root')
)
