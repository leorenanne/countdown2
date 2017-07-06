import React from 'react';
import PropTypes from 'prop-types';
// import DaysLeft from './DaysLeft'

class Events extends React.Component {

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
      <div></div>
    );
  }

}

export default Events;