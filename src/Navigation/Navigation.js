import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faPlus, faHeart } from "@fortawesome/free-solid-svg-icons";

import { Navigation as NavigationStyle } from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <nav className={NavigationStyle}>
      <ul>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faList} size="lg" />
            {/* <span>Explore</span> */}
          </Link>
        </li>

        <li>
          <Link to="/new">
            <FontAwesomeIcon icon={faPlus} size="lg" />
            {/* <span>New</span> */}
          </Link>
        </li>
        <li>
          <Link to="/favorites">
            <FontAwesomeIcon icon={faHeart} size="lg" />
            {/* <span>Favorite</span> */}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
