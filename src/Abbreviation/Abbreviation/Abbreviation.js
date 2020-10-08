import React from "react";

import { Abbreviation as AbbreviationStyle } from "./Abbreviation.module.scss";

const Abbreviation = ({ abbreviation, stands_for, showDetailsHandler }) => {
  return (
    <div className={AbbreviationStyle} onClick={showDetailsHandler}>
      <h1>{abbreviation}</h1>
      <p>{stands_for}</p>
    </div>
  );
};

export default Abbreviation;
