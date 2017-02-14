import React from 'react';
import ReactDOM from 'react-dom';

class Container extends React.Component {
  render() {
    return (
      <div id="drum-machine">
        <Display />

        <DrumPad note="Q"/>
        <DrumPad note="W"/>
        <DrumPad note="E"/>

        <DrumPad note="A"/>
        <DrumPad note="S"/>
        <DrumPad note="D"/>

        <DrumPad note="Z"/>
        <DrumPad note="X"/>
        <DrumPad note="C"/>
      </div>
    );
  }
}

class Display extends React.Component {
  render() {
    return <div id="display"></div>;
  }
}

class DrumPad extends React.Component {
  render() {
    return <div id={this.props.note} className="drum-pad">{this.props.note}</div>;
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
