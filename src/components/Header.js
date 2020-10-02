import React from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="border-b p-3 flex justify-between items-center">
      <Link to="/recipehome" className="font-bold">
        {props.appName}
      </Link>

      <Navigation />
    </header>
  );
}

export default Header;
