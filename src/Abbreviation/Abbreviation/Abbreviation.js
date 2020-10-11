import React from "react";
import { Link } from "react-router-dom";

import { Abbreviation as AbbreviationStyle } from "./Abbreviation.module.scss";

const Abbreviation = ({ id, abbreviation, stands_for }) => {
  return (
    <div className={AbbreviationStyle}>
      <Link to={`/abbr/${id}`}>
        <h1>{abbreviation}</h1>
      </Link>
      <p>{stands_for}</p>
    </div>
  );
};

export default Abbreviation;
