import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import TrophyModel from "../models/TrophyModel.js";

const propTypes = {
  model: PropTypes.instanceOf(TrophyModel).isRequired,
  isAchieved: PropTypes.bool.isRequired,
  openTrophy: PropTypes.func.isRequired
};

const Trophy = (props) => {
  const variant = props.isAchieved ? "primary" : "outline-secondary";

  return <Button variant={variant}
                 className="trophy"
                 onClick={props.openTrophy}>
    <div className="name">{props.model.name}</div>
    <div><FontAwesomeIcon icon={faTrophy} /></div>
  </Button>;
};

Trophy.propTypes = propTypes;
export default React.memo(Trophy);