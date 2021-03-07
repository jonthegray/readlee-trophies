import AchievementModel from "./AchievementModel.js";

class StudentModel {
  /*
   * Note: This assumes that some data has changed and always creates a new
   *   instance. To minimize re-renders, the existing achievements are used
   *   if those have not changed.
   */
  updateFromServer({ id, name, readingTime, storyCount, achievements }, allTrophies) {
    const student = new StudentModel();

    student.id = id;
    student.name = name;
    student.readingTime = readingTime;
    student.storyCount = storyCount;

    if (id === this.id && achievements.length === this.achievements.length) {
      student.achievements = this.achievements;

    } else {
      student.achievements = achievements.map(a => {
        return AchievementModel.fromServer(a, allTrophies);
      });
    }

    return student;
  }
}

export default StudentModel;