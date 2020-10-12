import React from "react";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  sidedrawer_header,
  sidedrawer_header_picture,
  sidedrawer_header_auth,
  btn,
  login_btn,
  sign_up_btn,
} from "./SidedrawerHeader.module.scss";

const SidedrawerHeader = () => {
  return (
    <div className={sidedrawer_header}>
      <div className={sidedrawer_header_picture}>
        <FontAwesomeIcon icon={faUserCircle} size="4x" />
      </div>
      <div className={sidedrawer_header_auth}>
        <button className={btn + " " + login_btn}>Login</button>
        <button className={btn + " " + sign_up_btn}>Sign up</button>
      </div>
    </div>
  );
};

export default SidedrawerHeader;
