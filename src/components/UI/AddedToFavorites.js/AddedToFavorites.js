import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import {
  AddedToFavorites as AddedToFavoritesStyle,
  AddedToFavorites__fail,
  check_icon,
  check_icon__success,
  check_icon__fail,
  text,
  moved,
} from "./AddedToFavorites.module.scss";

const AddedToFavorites = ({ showAlert, success }) => {
  let cssClass = AddedToFavoritesStyle + " " + (showAlert ? "" : moved);

  return (
    <div className={cssClass + " " + AddedToFavorites__fail}>
      <div className={check_icon__fail}>
        <FontAwesomeIcon icon={faCheckCircle} size="lg" />
      </div>
      <div className={text}>Added to favorites</div>
    </div>
  );
};

export default AddedToFavorites;
