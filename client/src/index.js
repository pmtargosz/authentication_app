import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

import reducer from "./reducers";
import App from "./components/App";
import Welcome from "./components/Welcome";
import Feature from "./components/Feature";
import Signup from "./components/auth/Signup";
import Signout from "./components/auth/Signout";
import Signin from "./components/auth/Signin";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  {
    auth: {
      authenticated: localStorage.getItem("token")
    }
  },
  composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" component={props => <Signup {...props} />} />
        <Route path="/signout" component={Signout} />
        <Route path="/signin" component={props => <Signin {...props} />} />
        <Route path="/feature" component={Feature} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#auth_app")
);
