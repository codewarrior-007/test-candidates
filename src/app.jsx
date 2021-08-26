import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import createStore from "./redux/create";
import "./styles.less";

import Home from "./views/Home";

function init(el, initialState) {
  const store = createStore(initialState);

  ReactDOM.render(
    <Provider store={store}>
      <Home />
    </Provider>,
    el
  );
}

export { init };
