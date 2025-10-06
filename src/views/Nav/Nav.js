import React from "react";
import "./Nav.scss";
import { NavLink, Link } from "react-router-dom"; // 🔥 import NavLink

class Nav extends React.Component {
  render() {
    return (
      <div className="topnav">
        {/* <Link to="/">Home</Link>
        <Link to="/todo">Todo</Link>
        <Link to="/about">About</Link> */}

        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/todo"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Todo
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="/user"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          User
        </NavLink>
      </div>
    );
  }
}

export default Nav;
