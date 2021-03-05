import Immutable from "immutable";

const TrophyRecord = Immutable.Record({
  id: 0,
  name: "",
  description: "",
  // (StudentModel) -> bool
  hasAchieved: (student) => false
});

class TrophyModel {
  constructor(id, name, description, hasAchieved) {
    this._record = new TrophyRecord()
      .set("id", id)
      .set("name", name)
      .set("description", description)
      .set("hasAchieved", hasAchieved);
  }

  get id() { return this._record.id; }
  get name() { return this._record.name; }
  get description() { return this._record.description; }
  get hasAchieved() { return this._record.hasAchieved; }
}

export default TrophyModel;