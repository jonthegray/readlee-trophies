import React from "react";
import "./css/App.css";
import Store from "./flux/Store.js";
import Trophies from "./views/Trophies";

const App = () => {
  const [data, setData] = React.useState(Store.getData());

  React.useEffect(() => {
    // Listen to Store on mount
    Store.addListener(storeChanged);

    // Remove listener on unmount
    return () => Store.removeListener(storeChanged);
  }, []);

  const storeChanged = React.useCallback(() => {
    setData(Store.getData());
  });

  return <Trophies {...data} />;
};

export default App;
