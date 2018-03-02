import React, { Component } from "react";
import InputForm from "./inputForm";
import Preview from "./preview";

class Container extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      showText: false,
      showPreview: false
    };
    this.changeTitle = this.changeTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.togglePreview = this.togglePreview.bind(this);
  }

  handleSubmit = event => {
    let { showText, title } = this.state;

    this.setState({ showText: !showText, title: "" });
  };

  changeTitle(title) {
    this.setState({ title });
  }

  togglePreview = event => {
    let { showPreview } = this.state;

    this.setState({ showPreview: !showPreview });
  };

  render() {
    const { showText, title, showPreview } = this.state;

    return (
      <InputForm
        changeTitle={this.changeTitle}
        handleSubmit={this.handleSubmit}
        title={title}
        showText={showText}
        showPreview={showPreview}
        togglePreview={this.togglePreview}
      />
    );
  }
}

export default Container;
