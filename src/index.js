import React from 'react';
import ReactDOM from 'react-dom';

import TimerContainer from './containers/timerContainer';

//create a component that output html
const App = () => {
    return (
        <div>
          Hello World
          <br/><br/>
          <TimerContainer />
        </div>
        );
}

//add the component to DOM
ReactDOM.render(<App />, document.querySelector(".container"));
