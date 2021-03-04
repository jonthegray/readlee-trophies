import { EventEmitter } from "events";
import Immutable from "immutable";
import Actions from "./Actions.js";
import AppDispatcher from "./AppDispatcher.js";
import Constants from "./Constants.js";

const CHANGE_EVENT = "store_change";

let _students = Immutable.List();

class Store extends EventEmitter {
  getData() {
    return {
      students: _students
    };
  }

  emitChange() {
    this.emitChange(CHANGE_EVENT);
  }

  addListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}

AppDispatcher.register((action) => {
  switch(action.actionType) {
    //JONTODO Fill in constants
  }
});

const instance = new Store();

export default instance;