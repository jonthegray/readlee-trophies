import React from "react";
import "./css/App.css";
import Store from "./flux/Store.js";
import TrophyPage from "./views/TrophyPage.jsx";

/*
 * App is a non-presentational component solely for communicating with the Store
 */
const App = () => {
  // Keep data in state so that changes will trigger re-renders in the
  // presentational components.
  const [data, setData] = React.useState(Store.getData());

  const storeChanged = () => {
    setData(Store.getData());
  };

  React.useEffect(() => {
    // Listen to Store on mount
    Store.addListener(storeChanged);

    // Remove listener on unmount
    return () => Store.removeListener(storeChanged);
  }, []);

  return <TrophyPage {...data} />;
};

export default App;
