import AppDispatcher from "./AppDispatcher.js";
import Constants from "./Constants.js";

const Actions = {
  /*
   * Load initial data from the server
   */
  initialize() {
    AppDispatcher.dispatch({
      actionType: Constants.INITIALIZE
    });
  },

  logReadingTime(minutes) {
    AppDispatcher.dispatch({
      actionType: Constants.LOG_READING_TIME,
      minutes
    });
  },

  logStoryCompleted() {
    AppDispatcher.dispatch({
      actionType: Constants.LOG_STORY_COMPLETED
    });
  }
};

export default Actions;