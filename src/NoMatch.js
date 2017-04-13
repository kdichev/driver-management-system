import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
          <h3>No match for <code>{location.pathname}</code></h3>
        </div>
    );
  }
}

export default App;
