/*
 * Base class for all models
 *
 * Each model instance has-a Immutable.Record (similar to a JS object, but only
 * allows specific keys to be set. Also provides default values).
 * This structure combines the benefits of immutable models (quick reference
 * equality comparisons) with the ease of working with classes and instances.
 */
//JONTODO Delete this but add the comments somewhere else
class RecordModelBase {
  /*
   * ctor: The ctor for the model class
   * recordCtor: The ctor for the Record
   */
  constructor(ctor, recordCtor) {
    this._ctor = ctor;
    this._record = valueRecord;
  }
}

export default RecordModelBase;