import Immutable from "immutable";

/*
 * Represents the achievement of a trophy
 */
const AchievementRecord = Immutable.Record({
  // UTC ISO string representing the timestamp when the trophy was achieved
  date: "",
  trophy: null
});

class AchievementModel {
  constructor() {
    this._record = new AchievementRecord();
  }

  get date() { return this._record.date; }
  get trophy() { return this._record.trophy; }
}