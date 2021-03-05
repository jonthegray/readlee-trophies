import AppDispatcher from "./AppDispatcher.js";
import Constants from "./Constants.js";

const Actions = {
  /*
   * Select a different student to view
   */
  selectStudent(student) {
    AppDispatcher.dispatch({
      actionType: Constants.SELECT_STUDENT,
      student
    });
  },

  /*
   * Make changes on the currently selected student
   */
  updateStudent(student) {
    AppDispatcher.dispatch({
      actionType: Constants.UPDATE_STUDENT,
      student
    });
  }
};

export default Actions;