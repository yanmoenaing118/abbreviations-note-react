import React, { useState, useEffect } from "react";

import { AbbreviationList as AbbreviationListStyle } from "./AbbreviationList.module.scss";
import Abbreviation from "./../Abbreviation/Abbreviation";
import AbbreviationDetails from "../AbbreviationDetails/AbbreviationDetails";

const AbbreviationList = () => {
  let [abbreviations, setAbbreviations] = useState([]);
  let [showDetails, setShowDetails] = useState(false);
  let [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch("http://localhost:9000/api/v1/abbreviations")
      .then((res) => res.json())
      .then((json) => {
        setAbbreviations(json.data.results);
      });
  }, []);

  const showDetailsHandler = (id) => {
    let selectedAbbr = abbreviations.filter((el) => el.id === id)[0];
    setShowDetails(!showDetails);
    setSelected(selectedAbbr);
  };

  return (
    <>
      <div className={AbbreviationListStyle}>
        {abbreviations.map((el) => {
          return (
            <Abbreviation
              key={el.id}
              {...el}
              showDetailsHandler={(e) => {
                e.stopPropagation();
                showDetailsHandler(el.id);
              }}
            />
          );
        })}
      </div>
      {
        <AbbreviationDetails
          showDetailsHandler={showDetailsHandler}
          showDetails={showDetails}
          {...selected}
        />
      }
    </>
  );
};

export default AbbreviationList;
