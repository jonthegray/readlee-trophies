import { EventEmitter } from "events";
import AllStudents from "../data/AllStudents.js";
import AppDispatcher from "./AppDispatcher.js";
import Constants from "./Constants.js";

const CHANGE_EVENT = "store_change";
const _eventEmitter = new EventEmitter();

// The selected student
let _allStudents = AllStudents;
let _student = null;

// Actions
const selectStudent = (student) => {
  // Special case to preserve reference equality (avoid an unnecessary re-render)
  if (student === _student)
    return;

  _student = student;
  Store.emitChange();
};

const updateStudent = (student) => {
  // Special case to preserve reference equality (avoid an unnecessary re-render)
  if (student === _student)
    return;

  // Also update the instance in the _all list so we can come back to it later
  const index = _allStudents.indexOf(_student);
  _allStudents = _allStudents.set(index, student);
  _student = student;

  Store.emitChange();
};

const Store = {
  getData() {
    return {
      allStudents: _allStudents,
      student: _student
    };
  },

  emitChange() {
    _eventEmitter.emit(CHANGE_EVENT);
  },

  addListener(callback) {
    _eventEmitter.on(CHANGE_EVENT, callback);
  },

  removeListener(callback) {
    _eventEmitter.removeListener(CHANGE_EVENT, callback);
  }
};

AppDispatcher.register((action) => {
  switch(action.actionType) {
    case Constants.SELECT_STUDENT:
      selectStudent(action.student);
      break;
    case Constants.UPDATE_STUDENT:
      updateStudent(action.student);
      break;
    default:
      // No action
  }
});

export default Store;