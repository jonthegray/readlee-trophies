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
let _allTrophies = [];
let _student = null;

/*
 * Helper function to change the logged-in user
 */
window.changeStudent = async (id) => {
  const newStudent = await Server.changeStudent(id);
  _student = _student.updateFromServer(newStudent, _allTrophies);

  Store.emitChange();
};

/*
 * Action handlers
 */
const initialize = async () => {
  const trophiesPromise = Server.getAllTrophies();
  const studentPromise = Server.getLoggedInStudent();

  Promise.all([trophiesPromise, studentPromise])
    .then(([trophies, student]) => {
      _allTrophies = trophies.map(TrophyModel.fromServer);
      _student = new StudentModel().updateFromServer(student, _allTrophies);

      Store.emitChange();
    });
};

const logReadingTime = async (minutes) => {
  const newStudent = await Server.logReadingTime(_student.id, minutes);
  _student = _student.updateFromServer(newStudent, _allTrophies);

  Store.emitChange();
};

const logStories = async (count) => {
  const newStudent = await Server.logStories(_student.id, count);
  _student = _student.updateFromServer(newStudent, _allTrophies);

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
