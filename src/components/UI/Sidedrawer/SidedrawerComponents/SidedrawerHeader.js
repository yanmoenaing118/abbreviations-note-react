import React, { useContext } from "react";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AuthContext from "./../../../../context/authContext";
import history from "./../../../../history";

import DefaultUserPic from "../../../../assets/default-user.png";

import {
  sidedrawer_header,
  sidedrawer_header_picture,
  sidedrawer_header_auth,
  btn,
  login_btn,
  sign_up_btn,
} from "./SidedrawerHeader.module.scss";

const SidedrawerHeader = () => {
  const context = useContext(AuthContext);

  return (
    <div className={sidedrawer_header}>
      <div className={sidedrawer_header_picture}>
        {context.auth ? (
          <img src={DefaultUserPic} alt="User" />
        ) : (
          <FontAwesomeIcon icon={faUserCircle} size="4x" />
        )}
      </div>

      <div className={sidedrawer_header_auth}>
        {context.auth ? (
          <div>
            <p>Yan Moe Naing</p>
            <p>yanmoenaing@gmail.com</p>
          </div>
        ) : (
          <>
            <button
              onClick={() => history.push("/login")}
              className={btn + " " + login_btn}
            >
              Log in
            </button>
            <button
              onClick={() => history.push("/signup")}
              className={btn + " " + sign_up_btn}
            >
              Sign up
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default SidedrawerHeader;
