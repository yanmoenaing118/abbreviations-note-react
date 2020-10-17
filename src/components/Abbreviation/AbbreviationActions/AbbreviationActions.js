import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faHeart } from "@fortawesome/free-solid-svg-icons";

import { Action } from "./AbbreviationActions.module.scss";

const AbbreviationActions = ({
  id,
  favorite,
  addToFavoriteHandler,
  showConfirmHandler,
}) => {
  return (
    <div className={Action}>
      <div>
        <Link to={`/edit-abbr/${id}`}>
          <FontAwesomeIcon icon={faEdit} />
        </Link>
      </div>
      <div
        onClick={addToFavoriteHandler}
        style={{ color: favorite ? "#4caf50" : "#fff" }}
      >
        <FontAwesomeIcon icon={faHeart} />
      </div>
      <div onClick={showConfirmHandler}>
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  );
};

export default AbbreviationActions;
