import React from "react";
import PropTypes from "prop-types";
import Actions from "../flux/Actions.js";
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

  const logReadingTime = () => {
    //JONTODO Don't hardcode the value
    const newStudent = props.student.logReadingTime(10);
    Actions.updateStudent(newStudent);
  };

  const logStudentFinishedReading = () => {
    const newStudent = props.student.logStudentFinishedReading();
    Actions.updateStudent(newStudent);
  };

  return <div>
    <StudentSelection allStudents={props.allStudents} student={props.student} />
    {trophies}
    <button onClick={logReadingTime} disabled={!props.student}>
      Log Reading Time
    </button>
    <button onClick={logStudentFinishedReading} disabled={!props.student}>
      Log Finished Reading
    </button>
  </div>;
};

TrophyPage.propTypes = propTypes;
export default TrophyPage;