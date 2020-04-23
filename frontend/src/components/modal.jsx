import React from "react";
import { closeModal } from "../actions/modal_actions"
import { connect } from "react-redux";

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  } else {
    //modal closes when murder pick is made -> affect state thru sockets
    return (
      <div className="modal-background">
        <div className="modal-relative">
          <h1>Murder In Progress</h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    modal: state.ui,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
