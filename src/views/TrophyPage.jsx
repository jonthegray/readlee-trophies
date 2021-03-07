import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Actions from "../flux/Actions.js";
import StudentModel from "../models/StudentModel.js";
import TrophyModel from "../models/TrophyModel.js";
import PageHeader from "./PageHeader.jsx";
import Trophies from "./Trophies.jsx";

//JONTODO Use Context?
const propTypes = {
  student: PropTypes.instanceOf(StudentModel),
  allTrophies: PropTypes.arrayOf(PropTypes.instanceOf(TrophyModel)).isRequired
};

const TrophyPage = (props) => {
  let trophies = null;
  if (props.student) {
    trophies = <Trophies student={props.student} allTrophies={props.allTrophies} />;
  }

  const logReadingTime = () => {
    //JONTODO Don't hardcode the value
    //JONTODO Add alert/toast for logging data
    Actions.logReadingTime(10);
  };

  const trophyCount = props.student.achievements.length;

  let countText;
  if (trophyCount === 0) {
    countText = "You don't have any trophies yet. Click each trophy to learn how to achieve it!";

  } else if (trophyCount < props.allTrophies.length) {
    const trophyText = trophyCount > 1 ? "trophies" : "trophy";
    countText = `Great! You have ${trophyCount} ${trophyText}. Keep up the good work!`;

  } else {
    countText = "Fantastic! You've achieved all the trophies!"
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
                onClick={logReadingTime}>
          Log Reading Time
        </Button>
        <Button variant="outline-secondary"
                disabled={!props.student}
                onClick={Actions.logStoryCompleted}>
          Log Finished Reading
        </Button>
      </div>
    </div>
  </React.Fragment>;
};

TrophyPage.propTypes = propTypes;
export default TrophyPage;