import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import ThunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";
import reducer from "./redux/reducer";

export const store = createStore(reducer, applyMiddleware(ThunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
