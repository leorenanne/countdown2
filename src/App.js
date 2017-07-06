import React, { Component } from 'react';

import '../public/stylesheets/App.css';
import MainEvent from './components/MainEvent'

class App extends Component {
  constructor(){
    super();

    this.state = {
      mainEvent: undefined,
      date: undefined
    }
  }

  componentDidMount() {
    const date = localStorage.getItem("mainEventDate");
    this.setState({date: date });
    
    const mainNameLocal = localStorage.getItem("mainEventName");
    var mainEventName = mainNameLocal? mainNameLocal: 'Event';
    this.setState({mainEvent: mainEventName});
  }

  render() {
    return (
      <div>
        <MainEvent mainEvent={this.state.mainEvent} date={this.state.date}/>
      </div>
    );
  }
}

export default App;
