import React from "react";
import PropTypes from "prop-types";
import StudentModel from "../models/StudentModel.js";
import StudentSelection from "./StudentSelection.jsx";
import Trophies from "./Trophies.jsx";

//JONTODO Use Context?
const propTypes = {
  student: PropTypes.instanceOf(StudentModel)
};

const TrophyPage = (props) => {
  let trophies = null;
  if (props.student) {
    trophies = <Trophies student={props.student} />;
  }

  return <div>
    <StudentSelection student={props.student} />
    {trophies}
  </div>;
};

TrophyPage.propTypes = propTypes;
export default TrophyPage;