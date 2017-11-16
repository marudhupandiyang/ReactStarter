import React from 'react';
import Timer from '../components/timer';

class TimerContainer extends React.Component {


  constructor(props) {
    super(props);
  }


  render() {
    return (
            <div>
              <Timer
              />
            </div>)
  }

}


export default TimerContainer;
