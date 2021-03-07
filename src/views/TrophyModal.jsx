import React from "react";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import TrophyModel from "../models/TrophyModel.js";

const propTypes = {
  trophy: PropTypes.instanceOf(TrophyModel).isRequired,
  // The timestamp that the trophy was achieved (null if not achieved)
  timestamp: PropTypes.string,
  hide: PropTypes.func.isRequired
};

const TrophyModal = (props) => {
  let body;
  if (props.timestamp) {
    const timeString = new Date(props.timestamp).toLocaleDateString() + " at "
      + new Date(props.timestamp).toLocaleTimeString();

    body = <React.Fragment>
      <div>{props.trophy.description}</div>
      <div className="second-line">Achieved on {timeString}</div>
    </React.Fragment>

  } else {
    body = <div>
      {props.trophy.description}{" "}
      (Not yet achieved)
    </div>
  }

  return <Modal id="trophy-modal" show={true} onHide={props.hide}>
    <Modal.Header closeButton>
      <Modal.Title>{props.trophy.name}</Modal.Title>
    </Modal.Header>
    <Modal.Body>{body}</Modal.Body>
  </Modal>
};

TrophyModal.propTypes = propTypes;
export default React.memo(TrophyModal);