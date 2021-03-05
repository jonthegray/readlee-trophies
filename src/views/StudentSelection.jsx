import React from "react";
import PropTypes from "prop-types";
import ImmutablePropTypes from "react-immutable-proptypes";
import Actions from "../flux/Actions.js";
import StudentModel from "../models/StudentModel.js";

//JONTODO Remove immutable and react-immutable-proptypes
//JONTODO Turn this into e.g. Header
const propTypes = {
  allStudents: ImmutablePropTypes.listOf(PropTypes.instanceOf(StudentModel)).isRequired,
  student: PropTypes.instanceOf(StudentModel)
};

const StudentSelection = (props) => {
  const selectStudent = React.useCallback((event) => {
    const id = Number(event.target.value);
    const student = props.allStudents.find(s => s.id === id);

    Actions.selectStudent(student);
  }, [props.allStudents]);

  const students = props.allStudents.map(student => {
    return <option key={student.id} value={student.id}>{student.name}</option>;
  });

  const value = props.student
    ? props.student.id
    : "";

  return <select value={value} onChange={selectStudent}>
    <option key="empty"></option>
    {students}
  </select>;
};

StudentSelection.propTypes = propTypes;
export default StudentSelection;