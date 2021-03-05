import React from "react";
import PropTypes from "prop-types";
import Actions from "../flux/Actions.js";
import StudentModel from "../models/StudentModel.js";
import TrophyModel from "../models/TrophyModel.js";
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

  return <div>
    {trophies}
    <button onClick={logReadingTime} disabled={!props.student}>
      Log Reading Time
    </button>
    <button onClick={Actions.logStoryCompleted} disabled={!props.student}>
      Log Finished Reading
    </button>
  </div>;
};

TrophyPage.propTypes = propTypes;
export default TrophyPage;