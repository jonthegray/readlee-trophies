import AllStudents from "./data/AllStudents.js";
import AllTrophies from "./data/AllTrophies.js";

const delayResponse = async (data) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 500);
  });
}

let _loggedInStudent = AllStudents[0];

/*
 * Simulation of back end and calls from the client
 * (usually these would be AJAX/async but this is sufficient for now)
 */
const Server = {
  async getAllTrophies() {
    return delayResponse(AllTrophies.map(t => t.clientData()));
  },

  async getLoggedInStudent() {
    return delayResponse(_loggedInStudent.clientData());
  },

  async changeStudent(id) {
    _loggedInStudent = AllStudents.find(s => s.id === id);
    return delayResponse(this.getLoggedInStudent());
  },

  async logReadingTime(studentId, minutes) {
    const student = AllStudents.find(s => s.id === studentId);
    student.logReadingTime(minutes);

    return delayResponse(student.clientData());
  },

  async logStories(studentId, count) {
    const student = AllStudents.find(s => s.id === studentId);
    student.logStories(count);

    return delayResponse(student.clientData());
  }
};

export default Server;