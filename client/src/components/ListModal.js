import React from "react";
import CreateList from "./CreateList";

const ListModal = (props) => {
  return (
    <div
      className="modal fade"
      id="createNewList"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="createNewListTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="createNewListTitle">
              New List
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
            <CreateList
              onChangeListName={props.onChangeListName}
              handleNewList={props.handleNewList}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListModal;
