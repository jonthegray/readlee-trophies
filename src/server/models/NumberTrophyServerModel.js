import TrophyServerModelBase from "./TrophyServerModelBase.js";

/*
 * Trophies based on having read a number of stories
 */
class NumberTrophyServerModel extends TrophyServerModelBase {
  constructor(id, name, description, numStories) {
    super(id, name, description);
    this.numStories = numStories;
  }

  /*
   * Has the specified student achieved this trophy?
   */
  hasStudentAchieved(student) {
    return student.storiesRead >= this.numStories;
  }
}

export default NumberTrophyServerModel;