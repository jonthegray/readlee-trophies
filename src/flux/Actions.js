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

  /*
   * Log time spent reading
   */
  logReadingTime(minutes) {
    AppDispatcher.dispatch({
      actionType: Constants.LOG_READING_TIME,
      minutes
    });
  },

  /*
   * Log number of stories completed
   */
  logStories(count) {
    AppDispatcher.dispatch({
      actionType: Constants.LOG_STORIES,
      count
    });
  }
};

export default Actions;
