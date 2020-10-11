import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt, faHeart } from "@fortawesome/free-solid-svg-icons";

import { Action } from "./AbbreviationActions.module.scss";

const AbbreviationActions = ({ id }) => {
  return (
    <div className={Action}>
      <div>
        <Link to={`/edit-abbr/${id}`}>
          <FontAwesomeIcon icon={faEdit} />
        </Link>
      </div>
      <div>
        <FontAwesomeIcon icon={faHeart} />
      </div>
      <div>
        <FontAwesomeIcon icon={faTrashAlt} />
      </div>
    </div>
  );
};

export default AbbreviationActions;
