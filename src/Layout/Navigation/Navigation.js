import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStream, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";

import {
  Navigation as NavigationStyle,
  active,
} from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <nav className={NavigationStyle} id="navbar">
      <ul>
        <li>
          <NavLink to="/" exact activeClassName={active}>
            <FontAwesomeIcon icon={faStream} size="sm" />
            {/* <span>Explore</span> */}
          </NavLink>
        </li>

        <li>
          <NavLink to="/favorites" activeClassName={active}>
            <FontAwesomeIcon icon={faHeart} size="sm" />
            {/* <span>Favorite</span> */}
          </NavLink>
        </li>

        <li>
          <NavLink to="/me" activeClassName={active}>
            <FontAwesomeIcon icon={faUser} size="sm" />
            {/* <span>Me</span> */}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
