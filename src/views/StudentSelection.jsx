import React from "react";
import PropTypes from "prop-types";
import AllStudents from "../data/AllStudents.js";
import Actions from "../flux/Actions.js";
import StudentModel from "../models/StudentModel.js";

const propTypes = {
  student: PropTypes.instanceOf(StudentModel)
};

const StudentSelection = (props) => {
  const setStudent = React.useCallback((event) => {
    const id = Number(event.target.value);
    const student = AllStudents.find(s => s.id === id);

    Actions.setStudent(student);
  }, []);

  const students = AllStudents.map(student => {
    return <option key={student.id} value={student.id}>{student.name}</option>;
  });

  const value = props.student
    ? props.student.id
    : "";

  return <select value={value} onChange={setStudent}>
    <option key="empty"></option>
    {students}
  </select>;
};

StudentSelection.propTypes = propTypes;
export default StudentSelection;