import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router";
import Quiz from "./Pages/Quiz";
import QuizEditor from "./Pages/QuizEditor";
import Home from "./Pages/Home";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/editor" component={QuizEditor} />
        <Route>
          <Redirect to="/home" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
