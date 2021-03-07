import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Actions from "../flux/Actions.js";

const propTypes = {
  currentMinutes: PropTypes.number.isRequired,
  hide: PropTypes.func.isRequired
};

const LogTimeModal = (props) => {
  const [minutes, setMinutes] = React.useState(null);
  const [isProcessing, setIsProcessing] = React.useState(false);

  const inputChanged = React.useCallback((event) => {
    setMinutes(Number(event.target.value));
  }, []);

  const save = () => {
    if (!minutes || minutes < 0)
      return;

    Actions.logReadingTime(minutes);
    setIsProcessing(true);
    // Parent hides the modal when the Action succeeds
  };

  const minuteS = props.currentMinutes > 1 ? "minutes" : "minute";

  let timeText = props.currentMinutes
    ? `You already have ${props.currentMinutes} ${minuteS} logged. `
    : "You don't have any time logged yet. ";

  return <Modal id="log-time-modal" show={true} onHide={props.hide}>
    <Modal.Header closeButton>
      <Modal.Title>Log Reading Time</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div>
        {timeText}
        How many more minutes have you spent reading since last time?
      </div>
      <input type="number"
             value={minutes || ""}
             disabled={isProcessing}
             onChange={inputChanged} />
    </Modal.Body>
    <Modal.Footer>
      <Button variant="primary" disabled={isProcessing} onClick={save}>
        Save
      </Button>
      <Button variant="outline-secondary" disabled={isProcessing} onClick={props.hide}>
        Cancel
      </Button>
    </Modal.Footer>
  </Modal>
};

LogTimeModal.propTypes = propTypes;
export default React.memo(LogTimeModal);
