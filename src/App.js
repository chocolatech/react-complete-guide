import React, { Component } from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

export default class App extends Component {
  state = {
    username: "Senssei"
  };

  onUsernameChange = event => {
    this.setState({ username: event.target.value });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      border: '1px solid blue',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <UserInput username={this.state.username} changed={this.onUsernameChange} />
        <button style={style}>Change name</button>
        <UserOutput>I am</UserOutput>
        <UserOutput username={this.state.username} />
        <UserOutput>Yay!</UserOutput>
      </div>
    );
  }
}
