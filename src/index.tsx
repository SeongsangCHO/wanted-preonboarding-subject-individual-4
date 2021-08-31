import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "store";
import TodoListPage from "pages/Todo";
import GlobalStyles from "styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/Theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Provider store={store}>
        <TodoListPage />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
