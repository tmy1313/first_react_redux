import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux'
import App from "../js/components/App";
import combinedReducers from "./reducers/CombinedReducers";
import thunk from 'redux-thunk';

const middleware = process.env.NODE_ENV !== 'production' ?
  [require('redux-immutable-state-invariant').default(), thunk] :
  [thunk];

  const store = createStore(
    combinedReducers,
    applyMiddleware(...middleware)
  );
  console.log("After CreateStore()");
  console.log(store.getState())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
