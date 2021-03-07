import AllStudents from "./data/AllStudents.js";
import AllTrophies from "./data/AllTrophies.js";

let _loggedInStudent = AllStudents[0];

/*
 * Simulation of back end and calls from the client
 * (usually these would be AJAX/async but this is sufficient for now)
 */
//JONTODO Make these async functions with a delay for processing time
const Server = {
  // getAllStudents() { return AllStudents.map(s => s.clientData()); },

  getAllTrophies() { return AllTrophies.map(t => t.clientData()); },

  getLoggedInStudent() { return _loggedInStudent.clientData(); },

  changeStudent(id) {
    _loggedInStudent = AllStudents.find(s => s.id === id);
    return this.getLoggedInStudent();
  },

  logReadingTime(studentId, minutes) {
    const student = AllStudents.find(s => s.id === studentId);
    student.logReadingTime(minutes);

    return student.clientData();
  },

  logStories(studentId, count) {
    const student = AllStudents.find(s => s.id === studentId);
    student.logStories(count);

    return student.clientData();
  }
};

export default Server;