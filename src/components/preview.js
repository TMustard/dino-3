import React from "react";

export default class Preview extends React.Component {
  clickHandler = event => {
    event.target.parentNode.childNodes[1].classList.toggle("hidden");
  };

  render() {
    return (
      <div className="parent">
        <button id="preview-toggle" onClick={this.clickHandler}>
          Show Preview
        </button>
        <section id="application-preview" className="hidden">
          {this.props.title}
        </section>
      </div>
    );
  }
}
