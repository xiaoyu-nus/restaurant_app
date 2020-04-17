import React from "react";
import AddRestaurant from "./AddRestaurant";

const RestModal = (props) => {
  return (
    <div
      className="modal fade"
      id="createNewRest"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="createNewRestTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="createNewRestTitle">
              Add to Collections
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
            <AddRestaurant
              lists={props.lists}
              handleAddRestaurant={props.handleAddRestaurant}
              onListChange={props.onListChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestModal;
