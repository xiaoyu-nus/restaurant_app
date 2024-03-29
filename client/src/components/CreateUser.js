import React, { Component } from "react";

class CreateUser extends Component {
  state = {
    userName: "",
    lists: [],
  };

  render() {
    const { handleSignIn, onChangeUserName } = this.props;
    return (
      <form
        onKeyPress={(e) => {
          e.key === "Enter" && e.preventDefault();
        }}
      >
        <div className="form-group">
          <label>Enter Your Name</label>
          <input
            id="userName"
            className="form-control"
            onChange={onChangeUserName}
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
            onClick={handleSignIn}
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default CreateUser;
