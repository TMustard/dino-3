import React, { Component } from "react";
import Preview from "./preview";

class InputForm extends Component {
  handleChange(event) {
    const title = event.target.value;
    this.props.changeTitle(title);
  }

  handleClick = event => {
    event.target.parentNode.parentNode.childNodes[1].classList.toggle("hidden");
  };

  render() {
    return (
      <div class="parent">
        <form id="application-input">
          <label>Apply Here:</label>
          <textarea
            id="application-text"
            rows="8"
            cols="100"
            onKeyUp={this.handleChange.bind(this)}
          />
          <input id="submit" type="submit" value="Submit" onClick={this.handleClick} />
        </form>
        <p id="message" className="hidden">
          Your application was submitted!
        </p>
        <Preview title={this.props.title} />
      </div>
    );
  }
}

export default InputForm;
