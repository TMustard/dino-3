import React, { Component } from "react";
import InputForm from "./inputForm";
import Preview from "./preview";

class Container extends Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };
  }

  changeTitle(title) {
    this.setState({ title });
  }

  render() {
    return <InputForm changeTitle={this.changeTitle.bind(this)} title={this.state.title} />;
  }
}

export default Container;
