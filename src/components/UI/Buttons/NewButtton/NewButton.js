import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import history from "./../../../../history";
import { NewButton as NewButtonStyle } from "./NewButton.module.scss";

const NewButton = () => {
  return (
    <div className={NewButtonStyle} onClick={() => history.push("/new")}>
      <FontAwesomeIcon icon={faPlus} size="lg" />
    </div>
  );
};

export default NewButton;
