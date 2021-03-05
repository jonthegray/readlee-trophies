import React from "react";
import PropTypes from "prop-types";
import TrophyModel from "../models/TrophyModel.js";

const propTypes = {
  model: PropTypes.instanceOf(TrophyModel).isRequired,
  isAchieved: PropTypes.bool.isRequired
};

const Trophy = (props) => {
  const achieved = props.isAchieved ? "ACHIEVED!" : "nope";
  
  return <div>
    <span>{achieved}</span>
    <span>{props.model.name}</span>
    <span>{props.model.description}</span>
  </div>;
};

Trophy.propTypes = propTypes;
export default Trophy;