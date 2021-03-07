import React from "react";
import PropTypes from "prop-types";
import AchievementModel from "../models/AchievementModel.js";
import TrophyModel from "../models/TrophyModel.js";
import Trophy from "./Trophy.jsx";
import TrophyModal from "./TrophyModal.jsx";

const propTypes = {
  achievements: PropTypes.arrayOf(PropTypes.instanceOf(AchievementModel)).isRequired,
  allTrophies: PropTypes.arrayOf(PropTypes.instanceOf(TrophyModel)).isRequired
};

const Trophies = (props) => {
  const [openTrophy, setOpenTrophy] = React.useState(null);

  const renderTrophy = React.useCallback((trophy, isAchieved) => {
    return <Trophy key={trophy.id}
                   model={trophy}
                   isAchieved={isAchieved}
                   openTrophy={() => setOpenTrophy(trophy)} />;
  }, []);

  const hideModal = React.useCallback(() => setOpenTrophy(null), []);

  const trophyCount = props.achievements.length;

  let countText;
  if (trophyCount === 0) {
    countText = "You don't have any trophies yet. Click each trophy to learn how to achieve it!";

  } else if (trophyCount < props.allTrophies.length) {
    const trophyIes = trophyCount > 1 ? "trophies" : "trophy";
    countText = `Great! You have ${trophyCount} ${trophyIes}. Keep up the good work!`;

  } else {
    countText = "Fantastic! You've achieved all the trophies!"
  }

  const achieved = props.achievements.map(a => renderTrophy(a.trophy, true));

  const notAchieved = props.allTrophies
    .filter(t => !props.achievements.find(a => a.trophy.id === t.id))
    .map(t => renderTrophy(t, false));

  let trophyModal = null;
  if (openTrophy) {
    const achievement = props.achievements.find(a => a.trophy.id === openTrophy.id);
    const timestamp = achievement ? achievement.timestamp : null;

    trophyModal = <TrophyModal trophy={openTrophy}
                               timestamp={timestamp}
                               hide={hideModal} />;
  }

  return <div className="trophies">
    {countText}
    <div className="trophy-list">
      {achieved}
      {notAchieved}
      {trophyModal}
    </div>
  </div>;
};

Trophies.propTypes = propTypes;
export default React.memo(Trophies);
