import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import { store } from "./app/store";
import { Provider } from "react-redux";
import "./i18n";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
