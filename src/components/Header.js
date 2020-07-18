import React from "react";
import Navigation from "./Navigation";

function Header(props) {
  return (
    <header className="border-b font-bold p-3 flex justify-between items-center">
      <span className="font-bold">{props.appName}</span>

      <Navigation />
    </header>
  );
}

export default Header;
