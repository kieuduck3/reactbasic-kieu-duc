import React from "react";

class AddComponent extends React.Component {
  state = {
    titlle: "",
    salary: "",
  };

  handleChangeTitleJob = (event) => {
    this.setState({
      titlle: event.target.value,
    });
  };
  handleChangeSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };
  handleOnClickDelete = () => {
    alert("Click me");
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.titlle || !this.state.salary) {
      alert("Missing repuired params");
      return;
    }
    console.log(">>>> check data input", this.state);
    this.props.addNewJob({
      id: Math.floor(Math.random() * 1001),
      titlle: this.state.titlle,
      salary: this.state.salary,
    });
    this.setState({
      titlle: "",
      salary: "",
    });
  };
  render() {
    return (
      <form>
        <label htmlFor="fname">Job title:</label>
        <br />
        <input
          type="text"
          value={this.state.titlle}
          onChange={(event) => this.handleChangeTitleJob(event)}
        />
        <br />
        <label htmlFor="lname">Salary:</label>
        <br />
        <input
          type="text"
          value={this.state.salary}
          onChange={(event) => this.handleChangeSalary(event)}
        />

        <br />
        <br />
        <input type="submit" onClick={(event) => this.handleSubmit(event)} />
      </form>
    );
  }
}

export default AddComponent;
