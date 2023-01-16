import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Context from "./stores/context";
import {Context1} from "./custom-order/custom-api";
const rootElement = document.getElementById("root");

const root = createRoot(rootElement);
root.render(
  <BrowserRouter>
    <Context>
      <Context1>
      <App />
      </Context1>
    </Context>
  </BrowserRouter>
);
