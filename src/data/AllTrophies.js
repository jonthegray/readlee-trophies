import Immutable from "immutable";
import TrophyModel from "../models/TrophyModel.js";

//JONTODO Figure out how to make the logic testable
const AllTrophies = Immutable.List([
  new TrophyModel(1, "Serious Reader", "Read 10 stories",
    student => student.storiesRead >= 10),
  new TrophyModel(2, "Reading Master", "Read 20 stories",
    student => student.storiesRead >= 20),
  new TrophyModel(3, "60 Minutes", "Read for one hour",
    student => student.readingTime >= 60)
]);

export default AllTrophies;