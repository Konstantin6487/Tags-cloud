import React from "react";
import { render } from "react-dom";
import Main from "./Main";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

render(<Main />, document.getElementById("root"));
registerServiceWorker();
