import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

ReactDOM.render(
  <div>
    <div className="head-name">
      <h1>город в живописи</h1>
    </div>,
  </div>,
  document.querySelector(".app")
)

ReactDOM.render(
  <div>
    <div className="main1">
      <h1>ссылка 1</h1>
      <h1>ссылка 2</h1>
      <h1>ссылка 3</h1>
      <h1>ссылка 4</h1>
    </div>,
  </div>,
  document.querySelector(".main")
)
