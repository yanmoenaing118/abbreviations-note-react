import React, { useEffect, useState } from "react";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AbbreviationActions from "../../components/Abbreviation/AbbreviationActions/AbbreviationActions";
import AbbreviationDetails from "../../components/Abbreviation/AbbreviationDetails/AbbreviationDetails";
import BackToBar from "../../components/UI/BackToBar/BackToBar";
import axios from "./../../axios";
import history from "./../../history";

import { loading as loadingStyle } from "./ShowAbbreviation.module.scss";

import {
  modal_body,
  modal_act,
  modal_icon,
  cancel_btn,
  delete_btn,
} from "./ShowAbbreviation.module.scss";
import Loading from "../../components/UI/Loading/Loading";
import Modal from "../../components/UI/Modal/Modal";

const ShowAbbreviation = (props) => {
  let [abbreviation, setAbbreviation] = useState({
    abbreviation: "",
    stands_for: "",
    description: "",
    favorite: null,
  });

  let [showConfirm, setShowConfirm] = useState(false);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const id = props.match.params.id;
      const data = await axios.get(`/abbreviations/${id}.json`);
      setAbbreviation({ ...data.data });
      setLoading(false);
    })();
  }, [props.match.params.id]);
  const goBackHandler = () => props.history.goBack();

  const addToFavoriteHandler = async () => {
    const id = props.match.params.id;
    const res = await axios.patch(`/abbreviations/${id}.json`, {
      favorite: !abbreviation.favorite,
    });
    console.log(res);
    setAbbreviation({ ...abbreviation, favorite: res.data.favorite });
  };

  const deleteAbbrHandler = async () => {
    await axios.delete(`/abbreviations/${props.match.params.id}.json`);
    history.push("/");
  };

  const showConfirmHandler = () => {
    console.log("confirm delete");
    setShowConfirm(!showConfirm);
  };
  return (
    <div>
      {showConfirm ? (
        <Modal close={() => setShowConfirm(false)}>
          <div onClick={(e) => e.stopPropagation()} className={modal_body}>
            <div className={modal_icon}>
              <FontAwesomeIcon icon={faTimesCircle} size="2x" />
            </div>
            <h1>Are you sure?</h1>
            <p>You can't undo this action.</p>
            <div className={modal_act}>
              <button
                onClick={() => setShowConfirm(false)}
                className={cancel_btn}
              >
                cancel
              </button>
              <button
                onClick={() => deleteAbbrHandler()}
                className={delete_btn}
              >
                delete
              </button>
            </div>
          </div>
        </Modal>
      ) : null}
      <BackToBar goBackHandler={goBackHandler} barTitle="Abbreviation" />
      {loading ? (
        <div className={loadingStyle}>
          <Loading />
        </div>
      ) : (
        <AbbreviationDetails {...abbreviation} />
      )}
      <AbbreviationActions
        id={props.match.params.id}
        favorite={abbreviation.favorite}
        addToFavoriteHandler={addToFavoriteHandler}
        showConfirmHandler={showConfirmHandler}
      />
      {/* <AddedToFavorites showAlert={showAlert} success={false} /> */}
    </div>
  );
};

export default ShowAbbreviation;
