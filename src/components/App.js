import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/app" render={() => <div>app</div>} />
        <Route path="/login" render={() => <div>login</div>} />
        <Route render={() => <div>default/error</div>} />
      </Switch>
    </HashRouter>
  );
}