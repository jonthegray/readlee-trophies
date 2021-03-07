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

  const inputChanged = React.useCallback((event) => {
    setCount(Number(event.target.value));
  }, []);

  const save = () => {
    if (!count || count < 0)
      return;

    Actions.logStories(count);
    props.hide();
  };
  
  const storyIes = props.currentCount > 1 ? "stories" : "story";

  let timeText = props.currentCount
    ? `You've already read ${props.currentCount} ${storyIes}. `
    : "You haven't read any stories yet. ";

  return <Modal id="log-stories-modal" show={true} onHide={props.hide}>
    <Modal.Header closeButton>
      <Modal.Title>Log Stories</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div>
        {timeText}
        How many more stories have you read since last time?
      </div>
      <input type="number"
             value={count || ""}
             onChange={inputChanged} />
    </Modal.Body>
    <Modal.Footer>
      <Button variant="primary" onClick={save}>Save</Button>
      <Button variant="outline-secondary" onClick={props.hide}>Cancel</Button>
    </Modal.Footer>
  </Modal>
};

LogStoriesModal.propTypes = propTypes;
export default React.memo(LogStoriesModal);