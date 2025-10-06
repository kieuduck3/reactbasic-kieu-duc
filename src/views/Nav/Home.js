import React from "react";
import { withRouter } from "./withRouter"; // đường dẫn tuỳ bạn đặt
import Color from "../HOC/Color.js";
import Logo from "../../assets/image/backgrouh.jpg";
import "./Nav.scss";
import { connect } from "react-redux";
class Home extends React.Component {
  handleClick = () => {
    // trong v6 không có history, thay bằng navigate
    this.props.router.navigate("/todo");
  };
  // componentDidMount() {
  //   let timeout = 3000;
  //   setTimeout(() => {
  //     this.props.router.navigate("/todo");
  //   }, timeout);
  // }

  handleDeleteUser = (user) => {
    console.log("checkk user", user);
    this.props.deleteUserRedux(user);
  };
  handleAddUser = () => {
    this.props.AddUserRedux();
  };

  render() {
    console.log("Check props redux", this.props.dataRedux);
    let ListUser = this.props.dataRedux;
    return (
      <>
        <div>Hello from kiều đức</div>
        <div>
          <img src={Logo} />
        </div>
        <div>
          {ListUser &&
            ListUser.length > 0 &&
            ListUser.map((item, index) => {
              return (
                <div key={item.id}>
                  {index + 1} - {item.name} &nbsp;{" "}
                  <span onClick={() => this.handleDeleteUser(item)}>x</span>
                </div>
              );
            })}
          <button onClick={() => this.handleAddUser()}>Add New</button>
        </div>
      </>
    );
  }
}

// export default withRouter(Home);

const mapStatetoProps = (state) => {
  return { dataRedux: state.users };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userdelete) =>
      dispatch({ type: "DELETE_USER", payload: userdelete }),
    AddUserRedux: () => dispatch({ type: "ADD_USER" }),
  };
};
export default connect(mapStatetoProps, mapDispatchToProps)(withRouter(Home));
