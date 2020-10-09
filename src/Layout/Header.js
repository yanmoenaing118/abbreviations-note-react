import React, { useEffect } from "react";
import Navigation from "../Navigation/Navigation";

import { Header as HeaderStyle, fixed } from "./Header.module.scss";

const Header = () => {
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (!entry.isIntersecting) {
        document.querySelector("#navbar").classList.add(fixed);
      } else {
        document.querySelector("#navbar").classList.remove(fixed);
      }
    });
  }, {});

  useEffect(() => {
    if (document.querySelector(".app_heading")) {
      observer.observe(document.querySelector(".app_heading"));
    }

    return () => {
      observer.disconnect();
    };
  }, [observer]);
  return (
    <header className={HeaderStyle}>
      <h1 className="app_heading">Abbreviation Dictionary</h1>
      <Navigation />
    </header>
  );
};

export default Header;
