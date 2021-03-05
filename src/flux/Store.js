import { EventEmitter } from "events";
import Actions from "./Actions.js";
import AppDispatcher from "./AppDispatcher.js";
import Constants from "./Constants.js";

const CHANGE_EVENT = "store_change";

// The selected student
let _student = null;

class Store extends EventEmitter {
  getData() {
    return {
      student: _student
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