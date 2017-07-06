import React from 'react';
import PropTypes from 'prop-types';
import DaysLeft from './DaysLeft'
import '../../public/stylesheets/components/MainEvent.css';

class MainEvent extends React.Component {

  static propTypes = {
    mainEvent: PropTypes.string,
    date: PropTypes.string
  };
  static defaultProps = {
    mainEvent: 'Calendar',
    date: null
  }

  render() {
    return (
      <div>
        <span className='main-event'>
          <span className="main-event-name">{this.props.mainEvent}</span>
          <span className='main-event-days'><DaysLeft dateString={this.props.date}/></span>
          <span>DAYS</span>
        </span>
      </div>
    );
  }

}

export default MainEvent;