class TrophyModel {
  static fromServer({ id, name, description }) {
    const trophy = new TrophyModel();

    trophy.id = id;
    trophy.name = name;
    trophy.description = description;

    return trophy;
  }
}

export default TrophyModel;
