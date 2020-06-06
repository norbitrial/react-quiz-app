import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { Router } from "react-router";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import IQuizState from "./Interfaces/IQuizState";
import { createBrowserHistory } from "history";

const quizReducer: IQuizState = {};
const mockStore = configureMockStore();
const store = mockStore({ quizReducer });
const history = createBrowserHistory();

test("renders without crash", () => {
  render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  );
});
