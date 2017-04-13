import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import App from './App';
import Dashboard from './Dashboard';
import NoMatch from './NoMatch';
import './index.css';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/dashboard' component={Dashboard} />
      <Route component={NoMatch}/>
    </Switch>
  </Router>,
  document.getElementById('root')
);
