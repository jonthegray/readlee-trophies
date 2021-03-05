import Immutable from "immutable";

const StudentRecord = Immutable.Record({
  id: 0,
  name: "",
  // The number of minutes spent reading
  readingTime: 0,
  // The number of stories read
  storiesRead: 0
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
}

export default StudentModel;