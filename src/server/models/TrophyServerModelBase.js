/*
 * Base class for all server-side trophy models
 */
class TrophyServerModelBase {
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
  }

  /*
   * Has the specified student achieved this trophy?
   * (overridden in child classes)
   */
  hasStudentAchieved(student) {
    return false;
  }

  /*
   * JS object representing the data that would be sent to the client
   */
  clientData() {
    return {
      id: this.id,
      name: this.name,
      description: this.description
    };
  }
}

export default TrophyServerModelBase;