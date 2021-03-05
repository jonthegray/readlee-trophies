import { EventEmitter } from "events";
import Actions from "./Actions.js";
import AppDispatcher from "./AppDispatcher.js";
import Constants from "./Constants.js";

const CHANGE_EVENT = "store_change";
const _eventEmitter = new EventEmitter();

// The selected student
let _student = null;

// Actions
const setStudent = (student) => {
  _student = student;
  Store.emitChange();
};

const Store = {
  getData() {
    return {
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
    case Constants.SET_STUDENT:
      setStudent(action.student);
      break;
    default:
      // No action
  }
});

export default Store;