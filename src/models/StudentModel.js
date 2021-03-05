import AchievementModel from "./AchievementModel.js";

class StudentModel {
  static fromServer({ id, name, achievements }, allTrophies) {
    const student = new StudentModel();

    student.id = id;
    student.name = name;
    student.achievements = achievements.map(a => {
      return AchievementModel.fromServer(a, allTrophies);
    });

    return student;
  }
}

export default StudentModel;