import React from "react";
import Navigation from "../Navigation/Navigation";

import { Header as HeaderStyle } from "./Header.module.scss";

const Header = () => {
  return (
    <header className={HeaderStyle}>
      <h1>Abbreviation Dictionary</h1>
      <Navigation />
    </header>
  );
};

export default React.memo(Header);
