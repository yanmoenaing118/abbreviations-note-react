import React from "react";

import { AbbreviationList as AbbreviationListStyle } from "./AbbreviationList.module.scss";
import Abbreviation from "./../Abbreviation/Abbreviation";

const AbbreviationList = ({ abbreviations }) => {
  return (
    <>
      <div className={AbbreviationListStyle}>
        {abbreviations.map((el) => {
          return <Abbreviation key={el.id} {...el} />;
        })}
      </div>
    </>
  );
};

export default AbbreviationList;
