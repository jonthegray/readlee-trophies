/*
 * Represents the achievement of a trophy
 */
class AchievementModel {
  /*
   * The server model only has the trophyId, so we need to inflate that to the
   * full TrophyModel instance--and reuse the existing TrophyModel instances to
   * avoid unnecessary re-renders.
   */
  static fromServer({ trophyId, timestamp }, allTrophies) {
    const achievement = new AchievementModel();

    const trophy = allTrophies.find(t => t.id === trophyId);
    achievement.trophy = trophy;
    achievement.timestamp = timestamp;

    return achievement;
  }
}

export default AchievementModel;