import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import TrophyModel from "../models/TrophyModel.js";

const propTypes = {
  model: PropTypes.instanceOf(TrophyModel).isRequired,
  isAchieved: PropTypes.bool.isRequired
};

const Trophy = (props) => {
  const achieved = props.isAchieved ? "ACHIEVED!" : "nope";
  
  return <Button variant="outline-secondary" className="trophy">
    <div>{props.model.name}</div>
    <div><FontAwesomeIcon icon={faTrophy} /></div>
  </Button>;
};

Trophy.propTypes = propTypes;
export default Trophy;