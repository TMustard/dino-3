import React, { Component } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import JobDetails from "./components/jobDetails";
import Container from "./components/Container";

// Makes a fetch request and renders the data returned from that request
//  Has an input area
//  Renders what is entered into that input on the page in a preview element in real time
//  Shows and hides preview when link is clicked

class App extends Component {
  state = { job: {} };

  componentDidMount() {
    this.getJob();
  }

  getJob = () => {
    return fetch("./listing.json")
      .then(response => response.json())
      .then(job => {
        this.setState({ job });
      });
  };

  render() {
    const { job } = this.state;
    return (
      <main>
        <Header />
        <JobDetails jobTitle={job.title} jobDescription={job.description} />
        <Container />
        <Footer />
      </main>
    );
  }
}

export default App;
