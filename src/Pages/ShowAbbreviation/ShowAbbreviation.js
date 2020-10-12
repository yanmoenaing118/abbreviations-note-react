import React, { useEffect, useState } from "react";
import AbbreviationActions from "../../components/Abbreviation/AbbreviationActions/AbbreviationActions";
import AbbreviationDetails from "../../components/Abbreviation/AbbreviationDetails/AbbreviationDetails";
// import AddedToFavorites from "../../components/UI/AddedToFavorites.js/AddedToFavorites";
import BackToBar from "../../components/UI/BackToBar/BackToBar";

const ShowAbbreviation = (props) => {
  let [abbreviation, setAbbreviation] = useState({
    abbreviation: "",
    stands_for: "",
    description: "",
  });

  // let [showAlert, setShowAlert] = useState(false);

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

  // const addToFavoriteHandler = () => {
  //   setShowAlert(true);
  //   setTimeout(() => {
  //     setShowAlert(false);
  //   }, 2000);
  // };
  return (
    <div>
      <BackToBar goBackHandler={goBackHandler} barTitle="Abbreviation" />
      <AbbreviationDetails {...abbreviation} />
      <AbbreviationActions
        id={props.match.params.id}
        // addToFavoriteHandler={addToFavoriteHandler}
      />
      {/* <AddedToFavorites showAlert={showAlert} success={false} /> */}
    </div>
  );
};

export default ShowAbbreviation;
