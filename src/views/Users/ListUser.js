import axios from "axios";
import React from "react";
import "./ListUser.scss";
import { withRouter } from "../Nav/withRouter";
class ListUser extends React.Component {
  state = {
    listUsers: [],
  };
  async componentDidMount() {
    // axios
    //   .get("https://reqres.in/api/users?page=1", {
    //     headers: {
    //       "x-api-key": "reqres-free-v1",
    //     },
    //   })
    //   .then((res) => {
    //     console.log("check res : ", res.data.data);
    //   });

    let res = await axios.get("https://reqres.in/api/users?page=1", {
      headers: {
        "x-api-key": "reqres-free-v1",
      },
    });

    console.log("API response:", res.data);

    this.setState({
      listUsers: res && res.data && res.data.data ? res.data.data : [],
    });
  }
  handleViewDetailUsers = (user) => {
    this.props.router.navigate(`/user/${user.id}`);
  };

  render() {
    let { listUsers } = this.state;
    return (
      <div className="list-user-container">
        <div className="title">Fetch all list user</div>
        <div className="list-user-content">
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <div
                  className="child"
                  key={item.id}
                  onClick={() => this.handleViewDetailUsers(item)}
                >
                  {index + 1} - {item.name} {item.year}
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default withRouter(ListUser);
