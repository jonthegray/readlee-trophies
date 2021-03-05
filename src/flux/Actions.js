import AppDispatcher from "./AppDispatcher.js";
import Constants from "./Constants.js";

const Actions = {
  setStudent(student) {
    AppDispatcher.dispatch({
      actionType: Constants.SET_STUDENT,
      student
    });
  }
};

export default Actions;