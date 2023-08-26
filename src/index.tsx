import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/reset.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createContext } from "react";
import SearchStore from "./store/SearchStore";

interface ContextType {
  searchStore: SearchStore;
}

export const Context = createContext<ContextType | null>(null);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Context.Provider
    value={{
      searchStore: new SearchStore(),
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider>
);

reportWebVitals();
