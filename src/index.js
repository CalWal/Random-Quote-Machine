import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import QuoteGen from "/components/QuoteGen";
import SimpsonsQuotes from "/components/SimpsonsQuotes";
import SimpsonsData from "/data/SimpsonsData";

function App() {
  return <SimpsonsQuotes />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
