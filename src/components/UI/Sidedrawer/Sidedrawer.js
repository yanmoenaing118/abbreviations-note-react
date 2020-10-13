import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import AuthContext from "../../../context/authContext";
import Lists from "../Lists/Lists";

import {
  backdrop,
  sidedrawer,
  logout_btn,
  moved,
  hide,
} from "./Sidedrawer.module.scss";
import SidedrawerHeader from "./SidedrawerComponents/SidedrawerHeader";

const Sidedrawer = ({ showSidedrawer, setShowSidedrawer }) => {
  let backdropClass = showSidedrawer ? backdrop : backdrop + " " + hide;
  let sidedrawerClass = showSidedrawer ? sidedrawer : sidedrawer + " " + moved;
  let context = useContext(AuthContext);
  return (
    <div
      className={backdropClass}
      onClick={(e) => {
        setShowSidedrawer(false);
      }}
    >
      <div className={sidedrawerClass} onClick={(e) => e.stopPropagation()}>
        <SidedrawerHeader />
        <Lists />
        {context.auth ? (
          <button className={logout_btn} onClick={context.logout}>
            <div>
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>
            <span>Logout</span>
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Sidedrawer;
