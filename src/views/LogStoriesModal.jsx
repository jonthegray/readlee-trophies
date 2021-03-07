import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Actions from "../flux/Actions.js";

const propTypes = {
  currentCount: PropTypes.number.isRequired,
  hide: PropTypes.func.isRequired
};

const LogStoriesModal = (props) => {
  const [count, setCount] = React.useState(null);
  const [isProcessing, setIsProcessing] = React.useState(false);

  const inputChanged = React.useCallback((event) => {
    setCount(Number(event.target.value));
  }, []);

  const save = () => {
    if (!count || count < 0)
      return;

    Actions.logStories(count);
    setIsProcessing(true);
    // Parent hides the modal when the Action succeeds
  };
  
  const storyIes = props.currentCount > 1 ? "stories" : "story";

  let countText = props.currentCount
    ? `You've already read ${props.currentCount} ${storyIes}. `
    : "You haven't read any stories yet. ";

  return <Modal id="log-stories-modal" show={true} onHide={props.hide}>
    <Modal.Header closeButton>
      <Modal.Title>Log Stories</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div>
        {countText}
        How many more stories have you read since last time?
      </div>
      <input type="number"
             value={count || ""}
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

LogStoriesModal.propTypes = propTypes;
export default React.memo(LogStoriesModal);