import React from 'react';
import PropTypes from 'prop-types';

// accepts seconds
class Timer extends React.Component {


  static defaultProps = {

  };

  constructor(props) {
    super(props);
    this.state = { dte: new Date() };
  }

  updateTime = () => {
    this.setState({ dte: new Date() });
  };

  componentDidMount() {
    setInterval(this.updateTime, this.props.updateInterval * 1000);
  }


  render() {
    const { dte } = this.state;
    return (
            <div>
              {dte.toLocaleDateString()}
              <br/>
              <br/>
              {dte.getMinutes()} -- {dte.getSeconds()}
            </div>)
  }

}


// Timer.propTypes = {
//   // updateInterval: PropType.number,
//   updateInterval: PropTypes.number.isRequired,
// };

// Timer.defaultProps = {
//   updateInterval: 1,
// }


export default Timer;
