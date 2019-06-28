import React, { Component } from "react";

export default class Validation extends Component {
  state = {
    limit: 5
  };

  render() {
    let alert;
    if (this.props.length < this.state.limit) {
      alert = <p>Text too short</p>;
    } else {
      alert = <p>Text too long</p>;
    }
    return <div>{alert}</div>;
  }
}
