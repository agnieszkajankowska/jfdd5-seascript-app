import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import App from './App/App'
import {DashboardView} from './App/DashboardView'
import {PlaceDetails} from './PlaceDetails'
import {NotFoundView} from './NotFoundView'
/*

 TO DO IMPORTS!!

 */


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'

import './index.css'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={DashboardView}/>

      <Route path="/place-details" component={PlaceDetails}/>

    </Route>

    <Route path="*" component={NotFoundView}/>
  </Router>,
  document.getElementById('root')
)
