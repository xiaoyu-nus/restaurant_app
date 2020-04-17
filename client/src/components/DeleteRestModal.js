import React, { Component } from "react";

const DeleteRestModal = (props) => {
  return (
    <div
      className="modal fade"
      id="deleteRestaurant"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="deleteRestTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="deleteRestTitle">
              Confirm
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
          <div className="modal-body md-5">
            Do you want to delete this restaurant from collection?
            <div />
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
                onClick={props.handleDelete}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteRestModal;
