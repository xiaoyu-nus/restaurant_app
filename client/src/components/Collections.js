import React, { Component } from "react";
import ListModal from "./ListModal";
import axios from "axios";
import { NavLink } from "react-router-dom";
const userPostURL = require("../keys").userUpdateURL;
const listPostURL = require("../keys").listPostURL;

class Collections extends Component {
  state = {
    user: {},
    lists: [],
    listName: "",
  };

  onChangeListName = (e) => {
    this.setState({
      listName: e.target.value,
    });
  };

  handleNewList = (user) => {
    if (Object.keys(user).length === 0 && user.constructor === Object) {
      alert("Please Login.");
      return;
    }
    const newList = user.lists;
    newList.push(this.state.listName);
    const newUser = {
      id: user._id,
      userName: user.userName,
      lists: newList,
    };
    const id = user._id;

    const newCollection = {
      listName: this.state.listName,
      userID: user._id,
      restaurants: [],
    };

    axios.post(userPostURL + id, newUser).then((res) => console.log(res.data));
    axios.post(listPostURL, newCollection).then((res) => console.log(res.data));
    this.setState({ lists: newList });
  };

  onClickSelection = (list) => {
    this.props.handleSelectCollection(list);
  };

  render() {
    const { user, lists } = this.props;
    const existingLists = lists.map((list, idx) => (
      <div
        className="d-inline-block mt-4 mr-5 "
        key={idx}
        onChange={this.props.onChange}
      >
        <NavLink to={`/shop/${user.userName}/${list}`}>
          <button
            type="button"
            className="btn btn-outline-dark"
            style={{ width: "15em" }}
            onClick={() => this.onClickSelection(list)}
          >
            {list}
          </button>
        </NavLink>
      </div>
    ));
    return (
      <div className="container">
        <h2>My Collections</h2>
        <hr className="my-4" />
        <div onChange={this.props.onChange}>
          {existingLists}
          <div className="d-inline-block mt-4 mr-5">
            <button
              type="button"
              className="btn btn-outline-primary "
              data-toggle="modal"
              data-target="#createNewList"
            >
              New Collection
            </button>
          </div>
        </div>
        <ListModal
          onChangeListName={this.onChangeListName}
          handleNewList={() => this.handleNewList(user)}
        />
      </div>
    );
  }
}

export default Collections;
