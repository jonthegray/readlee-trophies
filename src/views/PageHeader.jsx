import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import StudentModel from "../models/StudentModel.js";

const propTypes = {
  student: PropTypes.instanceOf(StudentModel)
};

const PageHeader = (props) => {
  let name = null;
  if (props.student) {
    name = <span className="name">{props.student.name}</span>;
  }

  return <header>
    <img alt="Readlee logo" src="/readlee_logo.png" />
    <div>
      {name}
      <FontAwesomeIcon icon={faUserCircle} />
    </div>
  </header>
};

PageHeader.propTypes = propTypes;
export default React.memo(PageHeader);