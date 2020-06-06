import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { unregister } from "./serviceWorker";
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./Store";

import "./index.css";
import Loader from "./Components/Loader";

const App = lazy(() => import("./App"));

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers.combined, applyMiddleware(sagaMiddleware));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <Suspense
          fallback={
            <div className="app-main-loader">
              <Loader />
            </div>
          }
        >
          <App />
        </Suspense>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

unregister();
