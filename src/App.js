import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/layout/";
import Home from "./pages/home";
import Exercises from "./pages/exercises";
import Progress from "./pages/progress";
import "./App.css";

function App() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
    renders the first one that matches the current URL. */}
      <Layout>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/exercises" component={Exercises} />
          <Route path="/progress" component={Progress} />
          <Route path="/" component={Home} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
