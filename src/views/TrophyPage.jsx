import React from "react";
import PropTypes from "prop-types";
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
    Actions.logReadingTime(10);
  };

  const trophyCount = props.student.achievements.length;

  let countText = "You don't have any trophies yet. Click each trophy to learn how to achieve it!"
  if (trophyCount < props.allTrophies.length) {
    const trophyText = trophyCount > 1 ? "trophies" : "trophy";
    countText = `Great! You have ${trophyCount} ${trophyText}. Keep reading to achieve more!`;

  } else {
    countText = "Fantastic! You've achieved all the trophies!"
  }

  return <React.Fragment>
    <PageHeader studentName={props.student.name} />
    <div id="content">
      <div className="title-header">View Trophies</div>
      <div className="count">{countText}</div>
      {trophies}
      <button onClick={logReadingTime} disabled={!props.student}>
        Log Reading Time
      </button>
      <button onClick={Actions.logStoryCompleted} disabled={!props.student}>
        Log Finished Reading
      </button>
    </div>
  </React.Fragment>;
};

TrophyPage.propTypes = propTypes;
export default TrophyPage;