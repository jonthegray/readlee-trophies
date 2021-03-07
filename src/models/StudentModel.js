import AchievementModel from "./AchievementModel.js";

class StudentModel {
  static fromServer({ id, name, readingTime, storyCount, achievements }, allTrophies) {
    const student = new StudentModel();

    student.id = id;
    student.name = name;
    student.readingTime = readingTime;
    student.storyCount = storyCount;
    student.achievements = achievements.map(a => {
      return AchievementModel.fromServer(a, allTrophies);
    });

    return student;
  }
}

export default StudentModel;