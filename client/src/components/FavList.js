import React from "react";
import axios from "axios";
import deleteIcon from "../deleteIcon.svg";
import DeleteRestModal from "./DeleteRestModal";
const listGetURL = require("../keys").listGetURL;
const listUpdateURL = require("../keys").listUpdateURL;

class FavList extends React.Component {
  state = {
    listName: "",
    restaurants: [],
    deleteRest: {},
  };

  componentDidMount() {
    const { user, list } = this.props;
    axios.get(listGetURL).then((res) => {
      if (res.data.length > 0) {
        const lists = res.data.filter(
          (l) => l.listName === list && l.userID === user._id
        );
        if (lists.length > 0) {
          this.setState({ restaurants: lists[0].restaurants, listName: list });
        }
      }
    });
  }

  onSelectDelete = (rest) => {
    this.setState({ deleteRest: rest });
  };

  handleDelete = (rest) => {
    const { user } = this.props;
    var restID;
    var rests = [0];
    axios
      .get(listGetURL)
      .then((res) => {
        if (res.data.length > 0) {
          const lists = res.data.filter(
            (l) => l.listName === this.state.listName && l.userID === user._id
          );
          if (lists.length > 0) {
            restID = lists[0]._id;
            rests = lists[0].restaurants;
          }
        }
      })
      .finally(() => {
        const newRest = rests.filter(
          (x) => x.name !== rest.name && x.time !== rest.time
        );

        const newList = {
          id: restID,
          listName: this.state.listName,
          userID: user._id,
          restaurants: newRest,
        };

        this.setState({ restaurants: newRest });
        axios
          .post(listUpdateURL + restID, newList)
          .then((res) => console.log(res.data));
      });
  };

  render() {
    const { listName, restaurants } = this.state;

    const restRows = restaurants.map((rest, idx) => (
      <tr key={idx}>
        <td>{rest.name}</td>
        <td className="right aligned">{rest.time}</td>
        <td>
          <img
            src={deleteIcon}
            alt=""
            className="btn btn-light"
            data-toggle="modal"
            data-target="#deleteRestaurant"
            onClick={() => this.onSelectDelete(rest)}
          />
        </td>
      </tr>
    ));

    return (
      <div id="rest-search" className="container">
        <h2 className="md-5">{listName}</h2>
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
        <DeleteRestModal
          handleDelete={() => this.handleDelete(this.state.deleteRest)}
        />
      </div>
    );
  }
}

export default FavList;
