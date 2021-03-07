import { EventEmitter } from "events";
import StudentModel from "../models/StudentModel.js";
import TrophyModel from "../models/TrophyModel.js";
import Server from "../server/Server.js";
import AppDispatcher from "./AppDispatcher.js";
import Constants from "./Constants.js";

const CHANGE_EVENT = "store_change";
const _eventEmitter = new EventEmitter();

// Simulate starting with empty data, then getting it from the server on page
// load
let _student = null;
let _allTrophies = [];

/*
 * Helper function to change the logged-in user
 */
window.changeStudent = (id) => {
  _student = StudentModel.fromServer(Server.changeStudent(id), _allTrophies);
  Store.emitChange();
};

/*
 * Action handlers
 */
const initialize = () => {
  _student = StudentModel.fromServer(Server.getLoggedInStudent());
  _allTrophies = Server.getAllTrophies().map(TrophyModel.fromServer);
};

const logReadingTime = (minutes) => {
  const newStudent = Server.logReadingTime(_student.id, minutes);

  // If no new trophies were achieved, we don't need to re-render
  if (newStudent.achievements.length === _student.achievements.length)
    return;

  _student = StudentModel.fromServer(newStudent, _allTrophies);
  Store.emitChange();
};

const logStories = (count) => {
  const newStudent = Server.logStories(_student.id, count);

  // If no new trophies were achieved, we don't need to re-render
  if (newStudent.achievements.length === _student.achievements.length)
    return;

  _student = StudentModel.fromServer(newStudent, _allTrophies);
  Store.emitChange();
};

/*
 * Store
 */
const Store = {
  getData() {
    return {
      student: _student,
      allTrophies: _allTrophies
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
    case Constants.INITIALIZE:
      initialize();
      break;
    case Constants.LOG_READING_TIME:
      logReadingTime(action.minutes);
      break;
    case Constants.LOG_STORIES:
      logStories(action.count);
      break;
    default:
      // No action
  }
});

export default Store;