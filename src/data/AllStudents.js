import Immutable from "immutable";
import StudentModel from "../models/StudentModel.js";

const AllStudents = Immutable.List([
  new StudentModel(1, "NoAchievements Student", 25, 0),
  new StudentModel(2, "OneHour Student", 60, 5),
  new StudentModel(3, "Speed Reader10", 30, 10),
  new StudentModel(4, "TenBooks Student", 400, 10),
  new StudentModel(5, "Speed Reader20", 30, 20),
  new StudentModel(6, "TwentyBooks Student", 750, 20),
  new StudentModel(7, "LotsOf Books", 1000, 100)
]);

export default AllStudents;