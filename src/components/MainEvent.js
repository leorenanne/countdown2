import React from 'react';
// import PropTypes from 'prop-types';
import DaysLeft from './DaysLeft'
import '../../public/stylesheets/components/MainEvent.css';

class MainEvent extends React.Component {
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
        <span className='main-event'>
          <span className="main-event-name">{this.state.name}</span>
          <span className='main-event-days'><DaysLeft dateString={this.state.date}/></span>
          <span>DAYS</span>
        </span>
      </div>
    );
  }

}

export default MainEvent;