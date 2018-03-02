import React from "react";

const Preview = ({ showPreview, togglePreview, title }) => {
  let preview;
  if (showPreview) preview = <section id="application-preview">{title}</section>;
  return (
    <div className="parent">
      <button id="preview-toggle" onClick={togglePreview}>
        Show Preview
      </button>
      {preview}
    </div>
  );
};

export default Preview;
