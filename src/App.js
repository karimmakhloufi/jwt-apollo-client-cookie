import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Books from "./Books";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <p>login</p>
        </Route>
        <Route path="/">
          <Books />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
