import React from 'react';
import ReactDOM from 'react-dom';

class Container extends React.Component {
  render() {
    return (
      <div id="drum-machine">
        <Display />
      </div>
    );
  }
}

class Display extends React.Component {
  render() {
    return <div id="display"></div>;
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Container />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector("#root")
);
