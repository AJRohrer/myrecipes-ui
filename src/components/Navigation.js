import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navigation() {
  return (
    <nav>
      <span className="text-xl">
        <FontAwesomeIcon icon={faBars} />
      </span>
    </nav>
  );
}

export default Navigation;
