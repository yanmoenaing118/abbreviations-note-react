import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { back_to_bar } from "./BackToBar.module.scss";

const BackToBar = ({ goBackHandler, barTitle }) => {
  return (
    <div className={back_to_bar}>
      <FontAwesomeIcon icon={faArrowLeft} size="lg" onClick={goBackHandler} />
      <h3>{barTitle}</h3>
    </div>
  );
};

export default BackToBar;
