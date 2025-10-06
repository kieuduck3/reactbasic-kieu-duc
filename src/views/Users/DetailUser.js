import React from "react";
import { withRouter } from "../Nav/withRouter";
import axios from "axios";

class DetailUser extends React.Component {
  state = {
    user: {},
  };
  async componentDidMount() {
    if (this.props.router && this.props.router.params) {
      let id = this.props.router.params.id;
      try {
        let res = await axios.get(`https://reqres.in/api/unknown/${id}`, {
          headers: {
            "x-api-key": "reqres-free-v1",
          },
        });
        console.log("check res user:", res.data); // log ra data user

        this.setState({
          user: res && res.data && res.data.data ? res.data.data : {},
        });
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    }
  }
  handleBackView = () => {
    this.props.router.navigate(`/user/`);
  };

  render() {
    let { user } = this.state;
    let isEmptObj = Object.keys(user).length === 0;
    return (
      <>
        {isEmptObj === false && (
          <>
            <div>Hello Detail user {this.props.router.params.id}</div>
            <div>User name : {user.name} </div>
            <div>User Year : {user.year} </div>
            <div>
              Color:
              <span
                style={{
                  display: "inline-block",
                  width: "20px",
                  height: "20px",
                  backgroundColor: user.color, // hiển thị màu
                  marginLeft: "10px",
                  borderRadius: "50%",
                  border: "1px solid #ccc",
                }}
              ></span>
              <span style={{ marginLeft: "8px" }}>{user.color}</span>
            </div>
            <div>
              <button type="button" onClick={() => this.handleBackView()}>
                Back
              </button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default withRouter(DetailUser);
