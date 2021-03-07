import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const PageHeader = (props) => {
  return <header>
    <img alt="Readlee logo" src="/Readlee+Logo+Red.png" />
    <FontAwesomeIcon icon={faUserCircle} />
  </header>
};

export default PageHeader;