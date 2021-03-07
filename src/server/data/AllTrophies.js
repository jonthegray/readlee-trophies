import NumberTrophyServerModel from "../models/NumberTrophyServerModel.js";
import TimeTrophyServerModel from "../models/TimeTrophyServerModel.js";

const AllTrophies = [
  new NumberTrophyServerModel(1, "Serious Reader", "Read 10 stories", 10),
  new NumberTrophyServerModel(2, "Reading Master", "Read 20 stories", 20),
  new TimeTrophyServerModel(3, "60 Minutes", "Read for one hour", 60)
];

export default AllTrophies;
