import React, { Component } from 'react';

import '../public/stylesheets/App.css';
import MainEvent from './components/MainEvent'
import Events from './components/Events'

class App extends Component {
  constructor(){
    super();

    this.state = {
      name: undefined,
      date: undefined,
    }
  }

  componentDidMount() {
    var mainEvent = localStorage.getItem("mainEvent") ? 
                    JSON.parse(localStorage.getItem("mainEvent")) :
                    {name: "Today", date: (new Date()).toJSON() };

    this.setState({date: mainEvent.date });
    this.setState({name: mainEvent.name });
  }

  render() {
    return (
      <div>
        <MainEvent mainEvent={this.state.name} date={this.state.date}/>
        <Events />
      </div>
    );
  }
}

export default App;
