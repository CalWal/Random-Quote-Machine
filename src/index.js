import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Header from "/components/Header";
import SimpsonsQuotes from "/components/SimpsonsQuotes";
import SimpsonsData from "/data/SimpsonsData";

function App() {
  return <SimpsonsQuotes />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
