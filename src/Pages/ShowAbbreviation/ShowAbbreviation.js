import React, { useEffect, useState } from "react";
import AbbreviationActions from "../../Abbreviation/AbbreviationActions/AbbreviationActions";
import AbbreviationDetails from "../../Abbreviation/AbbreviationDetails/AbbreviationDetails";
import BackToBar from "../../BackToBar/BackToBar";

const ShowAbbreviation = (props) => {
  let [abbreviation, setAbbreviation] = useState({
    abbreviation: "",
    stands_for: "",
    description: "",
  });

  useEffect(() => {
    const id = props.match.params.id;
    fetch(`http://localhost:9000/api/v1/abbreviations/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setAbbreviation(json.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.match.params.id]);
  const goBackHandler = () => props.history.goBack();
  return (
    <div>
      <BackToBar goBackHandler={goBackHandler} barTitle="Abbreviation" />
      <AbbreviationDetails {...abbreviation} />
      <AbbreviationActions id={props.match.params.id} />
    </div>
  );
};

export default ShowAbbreviation;
