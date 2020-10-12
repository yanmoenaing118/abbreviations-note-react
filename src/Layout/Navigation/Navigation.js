import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStream, faPlus, faHeart } from "@fortawesome/free-solid-svg-icons";

import { Navigation as NavigationStyle } from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <nav className={NavigationStyle} id="navbar">
      <ul>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faStream} size="sm" />
            <span>Explore</span>
          </Link>
        </li>

        <li>
          <Link to="/new">
            <FontAwesomeIcon icon={faPlus} size="sm" />
            <span>New</span>
          </Link>
        </li>
        <li>
          <Link to="/favorites">
            <FontAwesomeIcon icon={faHeart} size="sm" />
            <span>Favorite</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
