import React, { Component } from "react";
import Preview from "./preview";

const InputForm = ({ changeTitle, handleSubmit, title, showText, showPreview, togglePreview }) => {
  let submitText;
  if (showText) submitText = <p id="message">Your application was submitted!</p>;

  return (
    <div className="parent">
      <form id="application-input">
        <label>Apply Here:</label>
        <textarea
          id="application-text"
          rows="8"
          cols="100"
          onKeyUp={event => changeTitle(event.target.value)}
        />
        <input id="submit" value="Submit" onClick={event => handleSubmit(event)} />
      </form>
      {submitText}
      <Preview title={title} showPreview={showPreview} togglePreview={togglePreview} />
    </div>
  );
};
export default InputForm;
