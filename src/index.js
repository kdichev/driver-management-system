import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import App from './App';
import Login from './Login';
import Admin from './Admin';
import Dashboard from './Dashboard';
import NoMatch from './NoMatch';
import './index.css';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/admin' component={Admin} />
      <Route path='/dashboard' component={Dashboard} />
      <Route component={NoMatch}/>
    </Switch>
  </Router>,
  document.getElementById('root')
);
