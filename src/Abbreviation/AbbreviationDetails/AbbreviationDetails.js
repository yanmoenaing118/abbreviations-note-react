import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faHeart } from "@fortawesome/free-solid-svg-icons";

import {
  AbbreviationDetails_backdrop,
  AbbreviationDetails as AbbreviationDetailsStyle,
  Backdrop_In,
  Backdrop_Out,
  Action,
} from "./AbbreviationDetails.module.scss";

const AbbreviationDetails = ({
  id,
  abbreviation,
  stands_for,
  description,
  showDetailsHandler,
  showDetails,
}) => {
  const cssClass =
    AbbreviationDetails_backdrop +
    " " +
    (showDetails ? Backdrop_In : Backdrop_Out);
  return (
    <div className={cssClass} onClick={showDetailsHandler}>
      <div
        className={AbbreviationDetailsStyle}
        onClick={(e) => e.stopPropagation()}
      >
        <h1>{abbreviation}</h1>
        <h3>{stands_for}</h3>
        <p>{description}</p>
        <div className={Action}>
          <div>
            <FontAwesomeIcon icon={faEdit} />
          </div>
          <div>
            <FontAwesomeIcon icon={faHeart} />
          </div>
          <div>
            <FontAwesomeIcon icon={faTrash} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbbreviationDetails;
