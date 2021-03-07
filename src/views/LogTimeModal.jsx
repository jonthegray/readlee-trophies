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

  const inputChanged = React.useCallback((event) => {
    setMinutes(Number(event.target.value));
  }, []);

  const save = () => {
    if (!minutes || minutes < 0)
      return;

    Actions.logReadingTime(minutes);
    props.hide();
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
             onChange={inputChanged} />
    </Modal.Body>
    <Modal.Footer>
      <Button variant="primary" onClick={save}>Save</Button>
      <Button variant="outline-secondary" onClick={props.hide}>Cancel</Button>
    </Modal.Footer>
  </Modal>
};

LogTimeModal.propTypes = propTypes;
export default React.memo(LogTimeModal);