import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { Component } from "react";
import Heartbeat from "react-heartbeat";
import Search from "./Search";
import Navbar from "./Navbar";
import Collections from "./Collections";
import FavList from "./FavList";

import axios from "axios";
import UserModal from "./UserModal";
const postURL = require("../keys").userPostURL;
const getURL = require("../keys").userGetURL;

export class Home extends Component {
  state = {
    restaurants: [],
    userName: "",
    user: {},
    lists: [],
    selectedList: {},
  };

  onChangeUserName = (e) => {
    this.setState({
      userName: e.target.value,
    });
  };

  handleSelectCollection = (list) => {
    this.setState({ selectedList: list });
  };

  refresh = () => {
    axios.get(getURL).then((res) => {
      const users = res.data.filter((u) => u._id === this.state.user._id);
      if (users.length > 0) {
        this.setState({
          lists: users[0].lists,
        });
      }
    });
  };

  handleSignIn = (e) => {
    e.preventDefault();
    axios.get(getURL).then((res) => {
      const users = res.data.filter((u) => u.userName === this.state.userName);
      if (users.length > 0) {
        this.setState({
          lists: users[0].lists,
          user: users[0],
        });
      } else {
        const newUser = {
          userName: this.state.userName,
        };
        axios.post(postURL, newUser).then((res) => console.log(res.data));
        axios.get(getURL).then((res) => {
          const newU = res.data.filter(
            (u) => u.userName === this.state.userName
          );
          this.setState({
            user: newU[0],
            lists: newU[0].lists,
          });
        });
      }
    });
  };

  render() {
    const heartbeat = (
      <Heartbeat heartbeatFunction={this.refresh} heartbeatInterval={1000} />
    );

    return (
      <Router>
        <div>
          <Navbar user={this.state.userName} />
          <UserModal
            handleSignIn={this.handleSignIn}
            onChangeUserName={this.onChangeUserName}
          />
          <br />
          <Route
            path="/collections"
            exact
            render={(props) => (
              <Collections
                user={this.state.user}
                lists={this.state.lists}
                handleSelectCollection={this.handleSelectCollection}
                {...props}
              />
            )}
          />
          <Route
            path="/"
            exact
            render={(props) => (
              <Search
                user={this.state.user}
                lists={this.state.lists}
                {...props}
              />
            )}
          />
          <Route
            path="/:id/:id"
            render={(props) => (
              <FavList
                user={this.state.user}
                list={this.state.selectedList}
                {...props}
              />
            )}
          />
        </div>
        {heartbeat}
      </Router>
    );
  }
}

export default Home;
