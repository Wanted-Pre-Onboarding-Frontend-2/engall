import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./router/Routes";
import { RecoilRoot } from "recoil";
import "./style/index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <Routes />
    </RecoilRoot>
  </React.StrictMode>
);
