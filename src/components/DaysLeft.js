import React from 'react';
import PropTypes from 'prop-types';

const calculateDaysLeft = (dateInput) => {
  const today = new Date();
  var date = dateInput? new Date(dateInput) : new Date();
  return Math.ceil((date - today)/1000/60/60/24);
}

class DaysLeft extends React.Component {
  static propTypes = {
    dateString: PropTypes.string
  };
  static defaultProps = {
    dateString: null
  }

  render() {
    return (
      <div>
       <div className="days-left">{calculateDaysLeft(this.props.dateString)}</div>
      </div>
    );
  }

}


export default DaysLeft;