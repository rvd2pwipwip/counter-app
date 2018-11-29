import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Counters from "./components/Counters";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(<Counters />, document.getElementById("root"));

// If you want your Counter to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
