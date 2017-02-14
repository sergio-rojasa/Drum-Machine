import React from 'react';
import ReactDOM from 'react-dom';

class Container extends React.Component {
  render() {
    return (
      <div id="drum-machine">
        <Display />

        <DrumPad description="Heater-1" audioClip="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" note="Q"/>
        <DrumPad description="Heater-2" audioClip="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" note="W"/>
        <DrumPad description="Heater-3" audioClip="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" note="E"/>

        <DrumPad description="Heater-4" audioClip="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" note="A"/>
        <DrumPad description="Heater-6" audioClip="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" note="S"/>
        <DrumPad description="Dsc_Oh" audioClip="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" note="D"/>

        <DrumPad description="Kick_n_Hat" audioClip="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" note="Z"/>
        <DrumPad description="RP4_KICK_1" audioClip="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" note="X"/>
        <DrumPad description="Cev_H2" audioClip="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" note="C"/>
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
    return(
      <div id={this.props.description} className="drum-pad">
        {this.props.note}
        <audio src={this.props.audioClip} id={this.props.note} className="clip"></audio>
      </div>
    );
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
