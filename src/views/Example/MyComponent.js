import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
  state = {
    arrJobs: [
      { id: "abc", titlle: "developer", salary: "500" },
      { id: "fgh", titlle: "Tester ", salary: "400" },
      { id: "xyz", titlle: "Project managers", salary: "1000" },
    ],
  };

  addNewJob = (job) => {
    console.log("check job from parent : ", job);
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
  };
  deleteSJob = (job) => {
    let currenJobs = this.state.arrJobs;
    currenJobs = currenJobs.filter((item) => item.id !== job.id);
    this.setState({
      arrJobs: currenJobs,
    });
  };
  componentDidUpdate(prevProps, prevState) {
    console.log(
      ">>> run didupdate :",
      "prev state : ",
      prevState,
      "current state : ",
      this.state
    );
  }
  componentDidMount() {
    console.log(">>> run component did mount");
  }
  /*
    JSX => return block
    fragment
    */
  render() {
    console.log(">>> car render : ", this.state);
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />

        <ChildComponent
          arrJobs={this.state.arrJobs}
          deleteSJob={this.deleteSJob}
        />
      </>
    );
  }
}
export default MyComponent;
