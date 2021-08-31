import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "store";
import TodoListPage from "pages/Todo";
import GlobalStyles from "styles/GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={store}>
      <TodoListPage />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);
