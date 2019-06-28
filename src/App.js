import React, { Component } from "react";
import "./App.css";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";

export default class App extends Component {
  state = {
    length: 0,
    text: ''
  };

  getStringLength = event => {
    let text = event.target.value.split("");
    let length = text.join("").length;
    this.setState({ length: length, text: text });
  };

  deleteItem = index => {
    const letters = [...this.state.text];
    letters.splice(index, 1);
    this.setState({ text: letters });
    console.log('sth');
  };

  render() {
    return (
      <div className="App">
        <input type="text" value={this.state.text} onChange={event => this.getStringLength(event)} />
        <p>{this.state.length}</p>
        <Validation length={this.state.length} />
        {this.state.text &&
          this.state.text.map((char, index) => (
            <Char
              data={char}
              key={index}
              click={() => this.deleteItem(index)}
            />
          ))}
      </div>
    );
  }
}
