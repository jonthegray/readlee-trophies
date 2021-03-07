import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const propTypes = {
  studentName: PropTypes.string.isRequired
};

const PageHeader = (props) => {
  return <header>
    <img alt="Readlee logo" src="/readlee_logo.png" />
    <div>
      <span className="name">{props.studentName}</span>
      <FontAwesomeIcon icon={faUserCircle} />
    </div>
  </header>
};

PageHeader.propTypes = propTypes;
export default PageHeader;