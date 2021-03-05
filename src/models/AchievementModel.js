/*
 * Represents the achievement of a trophy
 */
class AchievementModel {
  static fromServer({ trophyId, timestamp }, allTrophies) {
    const achievement = new AchievementModel();

    const trophy = allTrophies.find(t => t.id === trophyId);
    achievement.trophy = trophy;
    achievement.timestamp = timestamp;

    return achievement;
  }
}

export default AchievementModel;