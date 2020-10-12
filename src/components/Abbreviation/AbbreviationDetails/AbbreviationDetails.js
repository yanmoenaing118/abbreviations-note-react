import React from "react";

import { AbbreviationDetails as AbbreviationDetailsStyle } from "./AbbreviationDetails.module.scss";

const AbbreviationDetails = ({ abbreviation, stands_for, description }) => {
  return (
    <div
      className={AbbreviationDetailsStyle}
      onClick={(e) => e.stopPropagation()}
    >
      <h1>{abbreviation}</h1>
      <h3>{stands_for}</h3>
      <p>{description}</p>
    </div>
  );
};

export default AbbreviationDetails;
