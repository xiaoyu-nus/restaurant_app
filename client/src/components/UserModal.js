import React, { Component } from "react";
import CreateUser from "./CreateUser";

const UserModal = (props) => {
  const { handleSignIn, onChangeUserName } = props;
  return (
    <div
      className="modal fade"
      id="createNewUser"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="createNewUserTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="createNewUserTitle">
              Register / Login
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <CreateUser
              handleSignIn={handleSignIn}
              onChangeUserName={onChangeUserName}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
