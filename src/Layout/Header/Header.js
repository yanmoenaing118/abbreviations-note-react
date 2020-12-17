import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Sidedrawer from "../../components/UI/Sidedrawer/Sidedrawer";
import history from "../../history";
import Navigation from "../Navigation/Navigation";
import {
  Header as HeaderStyle,
  appbar,
  menu,
  search,
  logo,
} from "./Header.module.scss";

const Header = (props) => {
  let [showSidedrawer, setShowSidedrawer] = useState(false);
  return (
    <header className={HeaderStyle}>
      <div className={appbar}>
        <div className={menu} onClick={(e) => setShowSidedrawer(true)}>
          <FontAwesomeIcon icon={faBars} size="lg" />
          <div className={logo}>
            <h1>ABBRS</h1>
          </div>
        </div>

        <div className={search} onClick={() => history.push("/search")}>
          <FontAwesomeIcon icon={faSearch} size="lg" />
        </div>
      </div>
      <Navigation />
      {showSidedrawer && (
        <Sidedrawer
          showSidedrawer={showSidedrawer}
          setShowSidedrawer={setShowSidedrawer}
        />
      )}
    </header>
  );
};

export default React.memo(Header);
