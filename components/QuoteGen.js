import React, { Component } from "react";
import { random } from "lodash";

class QuoteGen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: null
    };
  }

  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/shreyasminocha/7d5dedafc1fe158f82563c1223855177/raw/325d51aca7165b2498971afcff9bed286a52dc0e/quotes.json"
    )
      .then(data => data.json())
      .then(quotes => this.setState({ quotes }));
  }

  selectedQuoteIndex() {
    if (!this.state.quotes.length) {
      return undefined;
    }
    return random(0, this.state.quotes.length - 1);
  }

  render() {
    console.log(this.state.quotes);
    return (
      <div>
        <button>Get New Quote</button>
      </div>
    );
  }
}

export default QuoteGen;
