import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Books from "./Books";
import Login from "./Login";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Books />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
