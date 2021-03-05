import TrophyServerModelBase from "./TrophyServerModelBase.js";

/*
 * Trophies based on an amount of time spent reading
 */
class TimeTrophyServerModel extends TrophyServerModelBase {
  constructor(id, name, description, minTime) {
    super(id, name, description);
    this.minTime = minTime;
  }

  /*
   * Has the specified student achieved this trophy?
   */
  hasStudentAchieved(student) {
    return student.readingTime >= this.minTime;
  }
}

export default TimeTrophyServerModel;