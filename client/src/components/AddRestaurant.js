import React, { Component } from "react";
import axios from "axios";

const listURL = require("../keys").listGetURL;

class AddRestaurant extends Component {
  state = {
    lists: [],
  };

  render() {
    const { lists, handleAddRestaurant, onListChange } = this.props;
    const options = lists.map((list, idx) => (
      <option value={list} key={idx}>
        {list}
      </option>
    ));

    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <select
            className="custom-select"
            defaultValue={"DEFAULT"}
            onChange={onListChange}
          >
            <option value="DEFAULT" disabled>
              Choose a collection
            </option>
            {options}
          </select>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-primary"
            data-dismiss="modal"
            onClick={handleAddRestaurant}
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default AddRestaurant;
