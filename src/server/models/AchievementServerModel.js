/*
 * Server-side model for the achievement of a trophy
 */
class AchievementServerModel {
  constructor(trophyId, timestamp) {
    this.trophyId = trophyId;
    this.timestamp = timestamp;
  }

  /*
   * JS object representing the data that is sent to the client
   */
  clientData() {
    return {
      trophyId: this.trophyId,
      timestamp: this.timestamp
    };
  }
}

export default AchievementServerModel;
