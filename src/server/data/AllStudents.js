import StudentServerModel from "../models/StudentServerModel.js";

const AllStudents = [
  new StudentServerModel(1, "NoAchievements Student", 25, 0),
  new StudentServerModel(2, "OneHour Student", 60, 5),
  new StudentServerModel(3, "Speed Reader10", 30, 10),
  new StudentServerModel(4, "TenBooks Student", 400, 10),
  new StudentServerModel(5, "Speed Reader20", 30, 20),
  new StudentServerModel(6, "TwentyBooks Student", 750, 20),
  new StudentServerModel(7, "LotsOf Books", 1000, 100)
];

export default AllStudents;