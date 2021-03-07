import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import StudentModel from "../models/StudentModel.js";
import TrophyModel from "../models/TrophyModel.js";
import LogStoriesModal from "./LogStoriesModal.jsx";
import LogTimeModal from "./LogTimeModal.jsx";
import PageHeader from "./PageHeader.jsx";
import Trophies from "./Trophies.jsx";

const propTypes = {
  student: PropTypes.instanceOf(StudentModel),
  allTrophies: PropTypes.arrayOf(PropTypes.instanceOf(TrophyModel)).isRequired
};

const TrophyPage = (props) => {
  const [showStoriesModal, setShowStoriesModal] = React.useState(false);
  const [showTimeModal, setShowTimeModal] = React.useState(false);

  const openStoriesModal = React.useCallback(() => setShowStoriesModal(true), []);
  const hideStoriesModal = React.useCallback(() => setShowStoriesModal(false), []);

  const openTimeModal = React.useCallback(() => setShowTimeModal(true), []);
  const hideTimeModal = React.useCallback(() => setShowTimeModal(false), []);

  // Hide modals when the student gets updated (assume the update succeeded)
  React.useEffect(() => {
    if (showStoriesModal)
      hideStoriesModal();

    if (showTimeModal)
      hideTimeModal();
  }, [props.student]);

  let trophies = <div className="loading">Loading trophies...</div>;
  if (props.student) {
    trophies = <Trophies achievements={props.student.achievements}
                         allTrophies={props.allTrophies} />;
  }

  let storiesModal = null;
  if (showStoriesModal) {
    storiesModal = <LogStoriesModal currentCount={props.student.storyCount}
                                    hide={hideStoriesModal} />;
  }

  let timeModal = null;
  if (showTimeModal) {
    timeModal = <LogTimeModal currentMinutes={props.student.readingTime}
                              hide={hideTimeModal} />;
  }

  return <React.Fragment>
    <PageHeader student={props.student} />
    <div id="content">
      <div className="title-header">View Trophies</div>
      {trophies}
      <div>Want more trophies? Keep reading and log your progress!</div>
      <div className="buttons">
        <Button variant="outline-secondary"
                disabled={!props.student}
                onClick={openTimeModal}>
          Log Reading Time
        </Button>
        <Button variant="outline-secondary"
                disabled={!props.student}
                onClick={openStoriesModal}>
          Log Stories
        </Button>
      </div>
      {storiesModal}
      {timeModal}
    </div>
  </React.Fragment>;
};

TrophyPage.propTypes = propTypes;
export default React.memo(TrophyPage);