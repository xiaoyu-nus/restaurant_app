import React from "react";
import Client from "./Client";
import axios from "axios";
import searchIcon from "../searchIcon.svg";
import heartIcon from "../heartIcon.svg";
import RestModal from "./RestModal";
const getURL = require("../keys").restGetURL;
const listGetURL = require("../keys").listGetURL;
const listUpdateURL = require("../keys").listUpdateURL;

class Search extends React.Component {
  state = {
    restaurants: [],
    searchValue: "",
    filterer: "name",
    selectedList: "",
    selectedRest: {},
  };

  componentDidMount() {
    axios.get(getURL).then((res) => {
      if (res.data.length > 0) {
        this.setState({ restaurants: res.data });
      }
    });
  }

  handleAddRestaurant = (user) => {
    const selectedList = this.state.selectedList;
    if (selectedList === "") {
      alert("Please select a collection");
      return;
    }
    var restID;
    var newRest = [];
    axios
      .get(listGetURL)
      .then((res) => {
        if (res.data.length > 0) {
          const lists = res.data.filter(
            (l) => l.listName === selectedList && l.userID === user._id
          );
          if (lists.length > 0) {
            restID = lists[0]._id;
            newRest = lists[0].restaurants;
          }
        }
      })
      .finally(() => {
        newRest.push(this.state.selectedRest);

        const newList = {
          id: restID,
          listName: selectedList,
          userID: user._id,
          restaurants: newRest,
        };
        axios
          .post(listUpdateURL + restID, newList)
          .then((res) => console.log(res.data));
      });
  };

  handleSelectRestaurant = (rest) => {
    this.setState({ selectedRest: rest });
  };

  onListChange = (e) => {
    this.setState({ selectedList: e.target.value });
  };

  handleSearchChange = (e) => {
    const value = e.target.value;

    this.setState({
      searchValue: value,
    });

    if (value === "") {
      axios.get(getURL).then((res) => {
        if (res.data.length > 0) {
          this.setState({ restaurants: res.data });
        }
      });
    } else {
      this.setState({});

      Client.search(this.state.filterer, value, (restaurants) => {
        this.setState({
          restaurants: restaurants,
        });
      });
    }
  };

  handleFilterChange = (e) => {
    const value = e.target.value;
    this.setState({
      filterer: value,
    });
  };

  render() {
    const { restaurants } = this.state;
    const { user } = this.props;

    const restRows = restaurants.map((rest, idx) => (
      <tr key={idx}>
        <td>{rest.name}</td>
        <td className="right aligned">{rest.time}</td>
        <td>
          <img
            src={heartIcon}
            alt=""
            className="btn btn-light"
            data-toggle="modal"
            data-target="#createNewRest"
            onClick={() => this.handleSelectRestaurant(rest)}
          />
        </td>
      </tr>
    ));

    return (
      <div id="rest-search" className="container">
        <h2>All Restaurants</h2>
        <div className="input-group mb-3 w-50 p-3 float-right">
          <div className="input-group-prepend">
            <select
              className="btn btn-outline-secondary dropdown-toggle"
              defaultValue={"DEFAULT"}
              aria-haspopup="true"
              aria-expanded="false"
              onChange={this.handleFilterChange}
            >
              <option value="DEFAULT" disabled>
                Filter By
              </option>
              <option value="name">Name</option>
              <option value="time">Time</option>
            </select>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Search restaurant..."
            onChange={this.handleSearchChange}
          />
          <div className="input-group-append">
            <span className="input-group-text" id="basic-addon2">
              <img src={searchIcon} alt="" />
            </span>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th className="eight wide">Name</th>
              <th>Time</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{restRows}</tbody>
        </table>
        <RestModal
          lists={this.props.lists}
          handleAddRestaurant={() => this.handleAddRestaurant(user)}
          onListChange={this.onListChange}
        />
      </div>
    );
  }
}

export default Search;
