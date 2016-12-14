import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={DashboardView}/>

      <Route path="/students" component={StudentsView}>
        <Route path="/students/:studentId" component={StudentView}/>
      </Route>

      <Route path="/courses" component={CoursesView}>
        <Route path="/courses/:courseId" component={CourseView}/>
      </Route>

      <Route path="/samples" component={SamplesView}>
        <Route path="/samples/counter" component={CounterView}/>
      </Route>

    </Route>
    <Route path="*" component={NotFoundView}/>
  </Router>,
  document.getElementById('root')
)
