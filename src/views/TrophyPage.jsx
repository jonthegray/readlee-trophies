import PropTypes from "prop-types";
import AllStudents from "../data/AllStudents.js";
import AllTrophies from "../data/AllTrophies.js";
import StudentModel from "../models/StudentModel.js";

const propTypes = {
  student: PropTypes.instanceOf(StudentModel)
};

const TrophyPage = (props) => {
  const students = AllStudents.map(student => {
    return <option key={student.id}>{student.name}</option>;
  });

  const value = props.student
    ? props.student.id
    : "";

  return <select value={value}>
    <option key="empty"></option>
    {students}
  </select>
};

export default TrophyPage;