import React from "react";
import AppNavigation from "./navegation/AppNavegation";

import { Provider } from "react-redux";

const Main = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};
export default Main;
