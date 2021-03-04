import Immutable from "immutable";

const TrophyRecord = Immutable.Record({
  id: 0,
  name: "",
  description: ""
});

class TrophyModel {
  constructor() {
    this._record = new TrophyRecord();
  }

  get id() { return this._record.id; }
  get name() { return this._record.name; }
  get description() { return this._record.description; }
}

export default TrophyModel;