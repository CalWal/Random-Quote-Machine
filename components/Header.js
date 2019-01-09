import React from "react";

class Header extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <header>
        <p className="headerText">The Simpsons Quote Generator!</p>
      </header>
    );
  }
}

export default Header;
