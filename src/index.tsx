import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { unregister } from "./serviceWorker";
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./Store";

import "./index.css";

const history = createBrowserHistory();
const store = createStore(reducers.combined, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

unregister();
