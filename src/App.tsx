import React from "react";
import { Switch, Route, Redirect } from "react-router";
import Quiz from "./Pages/Quiz";
import QuizEditor from "./Pages/QuizEditor";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import { Container } from "@material-ui/core";
import useStyles from "./App.styles";

function App() {
  const classes = useStyles();

  return (
    <div className={classes["app"]}>
      <Container maxWidth="lg" className={classes["app-main"]}>
        <Header />

        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/editor" component={QuizEditor} />
          <Route>
            <Redirect to="/home" />
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
