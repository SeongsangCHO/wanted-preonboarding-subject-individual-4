import React from "react";
import ReactDOM from "react-dom";
import App from "App";
import GlobalStyles from "styles/GlobalStyles";
import { Provider } from "react-redux";
import store from "store";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);
