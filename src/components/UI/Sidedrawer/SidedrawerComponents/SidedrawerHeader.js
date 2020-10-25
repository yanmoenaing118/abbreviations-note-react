import React, { useContext } from "react";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AuthContext from "./../../../../context/authContext";
import history from "./../../../../history";

import DefaultUserPic from "../../../../assets/kyg.jpg";

import {
  sidedrawer_header,
  sidedrawer_header_picture,
  sidedrawer_header_auth,
  btn,
  login_btn,
  sign_up_btn,
  avatar,
} from "./SidedrawerHeader.module.scss";

const SidedrawerHeader = () => {
  const context = useContext(AuthContext);

  return (
    <div className={sidedrawer_header}>
      <div className={sidedrawer_header_picture}>
        {false ? (
          <div className={avatar}>
            <img src={DefaultUserPic} alt="User" />
          </div>
        ) : (
          <FontAwesomeIcon icon={faUserCircle} size="4x" />
        )}
      </div>

      <div className={sidedrawer_header_auth}>
        {false ? (
          <div>
            <p>Yan Moe Naing</p>
            <div>yanmoenaing@gmail.com</div>
          </div>
        ) : (
          <>
            <button
              onClick={() =>
                history.push("/auth/?isLogin=true", {
                  params: "hel",
                })
              }
              className={btn + " " + login_btn}
            >
              Log in
            </button>
            <button
              onClick={() => history.push("/auth/?isSignup=true")}
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
