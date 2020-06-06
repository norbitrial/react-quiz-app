import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { Router } from "react-router";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import IQuizState from "./Interfaces/IQuizState";
import { createBrowserHistory } from "history";
import IQuiz from "./Interfaces/IQuiz";

const currentQuizReducer: IQuizState = {};
const quizzesReducer: Array<IQuiz> = [];
const mockStore = configureMockStore();
const store = mockStore({ currentQuizReducer, quizzesReducer });
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
