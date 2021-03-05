import Immutable from "immutable";
import AllTrophies from "../data/AllTrophies.js";

/*
 * Improvement: In a more mature codebase, this helper function might be in a
 * shared utils file or base class for all models that use a Record.
 */
const updateStudent = (student, key, newValue) => {
  // Special case to preserve reference equality
  if (student._record.get(key) === newValue) {
    return student;
  }

  const newRecord = student._record.set(key, newValue);

  let newStudent = new StudentModel();
  newStudent._record = newRecord;

  return newStudent;
};

const StudentRecord = Immutable.Record({
  id: 0,
  name: "",
  // The number of minutes spent reading
  readingTime: 0,
  // The number of stories read
  storiesRead: 0,
  achievements: Immutable.Set()
});

class StudentModel {
  constructor(id, name, readingTime, storiesRead) {
    this._record = new StudentRecord()
      .set("id", id)
      .set("name", name)
      .set("readingTime", readingTime)
      .set("storiesRead", storiesRead);
  }

  get id() { return this._record.id; }
  get name() { return this._record.name; }
  get readingTime() { return this._record.readingTime; }
  get storiesRead() { return this._record.storiesRead; }
  get achievements() { return this._record.achievements; }

  /*
   * Log reading time for the student
   * Side effect: May update achievements
   */
  //JONTODO Add tests for these setters
  logReadingTime(minutes) {
    // Special case to preserve reference equality
    if (minutes === 0)
      return this;

    return updateStudent(this, "readingTime", this.readingTime + minutes)
      .recalcAchievements();
  }

  /*
   * Log that a student finished reading another story
   * Side effect: May update achievements
   */
  logStudentFinishedReading() {
    return updateStudent(this, "storiesRead", this.storiesRead + 1)
      .recalcAchievements();
  }

  /*
   * Improvement: It's less than ideal to have this exposed, since it should only
   * ever be called from inside StudentModel. However, there's no harm in a
   * consumer calling it directly--it should always just return the same instance.
   */
  recalcAchievements() {
    const achievedTrophies = this.achievements.map(a => a.trophy);

    const newAchievements = AllTrophies.reduce((accum, trophy) => {
      // We can't achieve the same trophy twice, and only add the newly achieved
      // trophies
      return achievedTrophies.find(t => t === trophy) || !trophy.hasAchieved(this)
        ? accum
        : accum.add(trophy);
    }, this.achievements);

    // No new achievements were added. Return this without modification so that
    // reference equality is preserved.
    if (newAchievements === this.achievements)
      return this;

    return updateStudent(this, "achievements", newAchievements);
  }
}

export default StudentModel;