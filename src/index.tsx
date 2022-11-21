import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { store } from "../src/store/store";
import { Provider } from "react-redux";
import { GlobalStyles } from "./ui/GlobalStyles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <GlobalStyles />
    </Provider>
  </React.StrictMode>
);
