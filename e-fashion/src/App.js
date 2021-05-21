import React from "react";
import Home from "./Home";
import Order from "./Order";

import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/order" exact>
          <Order />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
