// import React, { useState } from 'react';
// import '.styles.css';

'use strict';

const e = React.createElement;

class increment_component extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#increment_component');
ReactDOM.render(e(increment_component), domContainer);

// let counter = 0;

// function incrementCounter() {
//     counter = counter + 1;
//     renderState();
// }

// function renderState() {
//     console.log(counter);
// }

// setInterval(function () {
//     incrementCounter();
// }, 2000);

{/* <h2>HELLO</h2> */}

function App() {
    const [counter, setCounter] = useState(0);

    function incrementCounterHandler() {
        setCounter((prevCounter) => prevCounter + 1);
    }
    return (
        <main className='app'>
            <p>{counter}</p>
            <button onClick={incrementCounterHandler}>Increment</button>
        </main>
    );
}

export default App;