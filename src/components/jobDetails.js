import React from "react";

export default function JobDetails(props) {
  return (
    <section id="job-details">
      <h2>Job details</h2>
      <h4>{props.jobTitle}</h4>
      <p>{props.jobDescription}</p>
    </section>
  );
}
