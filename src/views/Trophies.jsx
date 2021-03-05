import React from "react";
import PropTypes from "prop-types";
import StudentModel from "../models/StudentModel.js";
import TrophyModel from "../models/TrophyModel.js";
import Trophy from "./Trophy.jsx";

const propTypes = {
  student: PropTypes.instanceOf(StudentModel).isRequired,
  allTrophies: PropTypes.arrayOf(PropTypes.instanceOf(TrophyModel)).isRequired
};

const Trophies = (props) => {
  const achieved = props.student.achievements.map(a => {
    return <Trophy key={a.trophy.id} model={a.trophy} isAchieved={true} />;
  });

  const notAchieved = props.allTrophies
    .filter(t => !props.student.achievements.find(a => a.trophy.id === t.id))
    .map(t => <Trophy key={t.id} model={t} isAchieved={false} />);

  return <div>
    {achieved}
    {notAchieved}
  </div>;
};

Trophies.propTypes = propTypes;
export default Trophies;