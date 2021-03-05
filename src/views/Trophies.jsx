import PropTypes from "prop-types";
import ImmutablePropTypes from "react-immutable-proptypes";
import StudentModel from "../models/StudentModel.js";
import TrophyModel from "../models/TrophyModel.js";

const propTypes = {
  students: ImmutablePropTypes.listOf(PropTypes.instanceOf(StudentModel)).isRequired,
  trophies: ImmutablePropTypes.listOf(PropTypes.instanceOf(TrophyModel)).isRequired,
};

const Trophies = (props) => {
  return "Hello";
};

export default Trophies;