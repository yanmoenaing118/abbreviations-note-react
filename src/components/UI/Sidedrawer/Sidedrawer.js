import {
  faArrowLeft,
  faBook,
  faCode,
  faComment,
  faListAlt,
  faTree,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import {
  backdrop,
  sidedrawer,
  list,
  list_item,
  list_icon,
  list_text,
  logout_btn,
  moved,
  hide,
} from "./Sidedrawer.module.scss";
import SidedrawerHeader from "./SidedrawerComponents/SidedrawerHeader";

const Sidedrawer = ({ showSidedrawer, setShowSidedrawer }) => {
  let backdropClass = showSidedrawer ? backdrop : backdrop + " " + hide;
  let sidedrawerClass = showSidedrawer ? sidedrawer : sidedrawer + " " + moved;
  return (
    <div
      className={backdropClass}
      onClick={(e) => {
        setShowSidedrawer(false);
      }}
    >
      <div className={sidedrawerClass} onClick={(e) => e.stopPropagation()}>
        <SidedrawerHeader />
        <div className={list}>
          <div className={list_item}>
            <div className={list_icon}>
              <FontAwesomeIcon icon={faBook} />
            </div>
            <p className={list_text}>Your Profile</p>
          </div>

          <div className={list_item}>
            <div className={list_icon}>
              <FontAwesomeIcon icon={faListAlt} />
            </div>
            <p className={list_text}>Your Abbreviations</p>
          </div>

          <div className={list_item}>
            <div className={list_icon}>
              <FontAwesomeIcon icon={faTree} />
            </div>
            <p className={list_text}>About us</p>
          </div>

          <div className={list_item}>
            <div className={list_icon}>
              <FontAwesomeIcon icon={faCode} />
            </div>
            <p className={list_text}>Contact us</p>
          </div>

          <div className={list_item}>
            <div className={list_icon}>
              <FontAwesomeIcon icon={faComment} />
            </div>
            <p className={list_text}>Write us a feedback</p>
          </div>
        </div>
        <button className={logout_btn}>
          <div>
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidedrawer;
