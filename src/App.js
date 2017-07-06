import React, { Component } from 'react';

import '../public/stylesheets/App.css';
import MainEvent from './components/MainEvent'
import Events from './components/Events'

class App extends Component {
  render() {
    return (
      <div>
        <MainEvent />
        <Events />
      </div>
    );
  }
}

export default App;
