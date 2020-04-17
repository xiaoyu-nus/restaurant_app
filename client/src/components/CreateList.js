import React, { Component } from "react";

class CreateList extends Component {
  state = {};

  render() {
    const { onChangeListName, handleNewList } = this.props;
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>List Name</label>
          <input
            id="listName"
            className="form-control"
            onChange={onChangeListName}
          />
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
            onClick={handleNewList}
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default CreateList;
