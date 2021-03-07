import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import StudentModel from "../models/StudentModel.js";
import TrophyModel from "../models/TrophyModel.js";
import LogStoriesModal from "./LogStoriesModal.jsx";
import LogTimeModal from "./LogTimeModal.jsx";
import PageHeader from "./PageHeader.jsx";
import Trophies from "./Trophies.jsx";

//JONTODO Use Context?
const propTypes = {
  student: PropTypes.instanceOf(StudentModel),
  allTrophies: PropTypes.arrayOf(PropTypes.instanceOf(TrophyModel)).isRequired
};

const TrophyPage = (props) => {
  const [showStoriesModal, setShowStoriesModal] = React.useState(false);
  const [showTimeModal, setShowTimeModal] = React.useState(false);

  let trophies = null;
  if (props.student) {
    trophies = <Trophies achievements={props.student.achievements}
                         allTrophies={props.allTrophies} />;
  }

  const openStoriesModal = React.useCallback(() => setShowStoriesModal(true), []);
  const hideStoriesModal = React.useCallback(() => setShowStoriesModal(false), []);

  const openTimeModal = React.useCallback(() => setShowTimeModal(true), []);
  const hideTimeModal = React.useCallback(() => setShowTimeModal(false), []);

  const trophyCount = props.student.achievements.length;

  let countText;
  if (trophyCount === 0) {
    countText = "You don't have any trophies yet. Click each trophy to learn how to achieve it!";

  } else if (trophyCount < props.allTrophies.length) {
    const trophyIes = trophyCount > 1 ? "trophies" : "trophy";
    countText = `Great! You have ${trophyCount} ${trophyIes}. Keep up the good work!`;

  } else {
    countText = "Fantastic! You've achieved all the trophies!"
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
    <PageHeader studentName={props.student.name} />
    <div id="content">
      <div className="title-header">View Trophies</div>
      <div>{countText}</div>
      {trophies}
      <div>Want to achieve more? Keep reading and log your progress!</div>
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