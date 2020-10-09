import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt, faHeart } from "@fortawesome/free-solid-svg-icons";

import {
  AbbreviationDetails_backdrop,
  AbbreviationDetails as AbbreviationDetailsStyle,
  Backdrop_In,
  Backdrop_Out,
  Action,
  fav,
} from "./AbbreviationDetails.module.scss";
import { Link } from "react-router-dom";

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
        {showDetails && (
          <div className={Action}>
            <div>
              <Link to={`/edit-abbr/${id}`}>
                <FontAwesomeIcon icon={faEdit} />
              </Link>
            </div>
            <div className={fav}>
              <FontAwesomeIcon icon={faHeart} />
            </div>
            <div>
              <FontAwesomeIcon icon={faTrashAlt} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AbbreviationDetails;
