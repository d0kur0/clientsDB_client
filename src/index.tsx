import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { store } from "./stores/rootStore";
import Routes from "./containers/Routes";
import Router from "./containers/Router";
import { GlobalStyles } from "./components/GlobalStyles";

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyles />
    <Router>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
