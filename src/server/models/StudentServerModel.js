import AllTrophies from "../data/AllTrophies.js";
import AchievementServerModel from "./AchievementServerModel.js";

class StudentServerModel {
  constructor(id, name, readingTime, storiesRead) {
    this.id = id;
    this.name = name;
    this.readingTime = readingTime;
    this.storiesRead = storiesRead;
    this.achievements = null;
  }

  /*
   * JS object representing the data that would be sent to the client
   */
  clientData() {
    if (!this.achievements)
      this.recalcAchievements();

    return {
      id: this.id,
      name: this.name,
      achievements: this.achievements.map(a => a.clientData())
    };
  }

  logReadingTime(minutes) {
    this.readingTime += minutes;
    this.recalcAchievements();
  }

  logStories(count) {
    this.storiesRead += count;
    this.recalcAchievements();
  }

  /*
   * Recalculate the student's achievements as data changes
   */
  recalcAchievements() {
    const current = this.achievements || [];

    const now = new Date().toISOString();
    const newAchievements = AllTrophies
      .filter((trophy) => {
        // Make sure we don't achieve the same trophy twice
        return !current.find(a => a.trophyId === trophy.id)
          && trophy.hasStudentAchieved(this);
      })
      .map((trophy) => new AchievementServerModel(trophy.id, now));

    this.achievements = current.concat(newAchievements);
  }
}

export default StudentServerModel;