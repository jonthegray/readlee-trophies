import React from "react";
import PropTypes from "prop-types";
import AllTrophies from "../data/AllTrophies.js";
import StudentModel from "../models/StudentModel.js";
import Trophy from "./Trophy.jsx";

const propTypes = {
  student: PropTypes.instanceOf(StudentModel).isRequired
};

const Trophies = (props) => {
  const achieved = AllTrophies.filter(t => t.hasAchieved(props.student))
    .map(t => <Trophy key={t.id} model={t} isAchieved={true} />);

  const notAchieved = AllTrophies.filter(t => !t.hasAchieved(props.student))
    .map(t => <Trophy key={t.id} model={t} isAchieved={false} />);

  return <div>
    {achieved}
    {notAchieved}
  </div>;
};

Trophies.propTypes = propTypes;
export default Trophies;