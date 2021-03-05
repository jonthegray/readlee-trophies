import { EventEmitter } from "events";
import Immutable from "immutable";
import AllStudents from "../data/AllStudents.js";
import AllTrophies from "../data/AllTrophies.js";
import Actions from "./Actions.js";
import AppDispatcher from "./AppDispatcher.js";
import Constants from "./Constants.js";

const CHANGE_EVENT = "store_change";

let _students = AllStudents;
let _trophies = AllTrophies;

class Store extends EventEmitter {
  getData() {
    return {
      students: _students,
      trophies: _trophies
    };
  }

  emitChange() {
    super.emitChange(CHANGE_EVENT);
  }

  addListener(callback) {
    super.on(CHANGE_EVENT, callback);
  }

  removeListener(callback) {
    super.removeListener(CHANGE_EVENT, callback);
  }
}

AppDispatcher.register((action) => {
  switch(action.actionType) {
    //JONTODO Fill in constants
  }
});

const instance = new Store();

export default instance;