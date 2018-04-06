import React from "react";
import ReactDOM from "react-dom";

import "../node_modules/system-fonts/css/system-fonts.css";
import "normalize.css";
import "./base.css";

import "whatwg-fetch";

import App from "./App";
import registerServiceWorker from "./helpers/registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
