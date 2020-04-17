import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  state = {
    user: "",
  };

  componentDidMount() {}

  render() {
    const { user } = this.props;
    return (
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <NavLink to="/">
          <span className="navbar-brand" href="#">
            Restaurant
          </span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink to="/">
                <span className="nav-link" href="#">
                  Home
                </span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/collections`}>
                <span className="nav-link" href="#">
                  My Collections
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
        <button
          className="btn btn-outline-light my-2 my-sm-0"
          type="button"
          data-toggle="modal"
          data-target="#createNewUser"
          style={user === "" ? {} : { visibility: "hidden" }}
        >
          Login
        </button>
        <button
          className="btn btn-outline-light my-2 my-sm-0"
          type="button"
          data-toggle="modal"
          data-target="#createNewUser"
          style={user === "" ? { display: "none" } : {}}
        >
          {user}
        </button>
      </nav>
    );
  }
}

export default Navbar;
