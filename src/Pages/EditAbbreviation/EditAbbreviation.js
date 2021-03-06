import React, { useState, useEffect } from "react";

import {
  form,
  form_group,
  form_label,
  form_input,
  form_textarea,
  form_submit,
} from "./../New/New.module.scss";
import {
  EditAbbreviation as EditAbbreviationStyle,
  loading as loadingStyle,
} from "./EditAbbreviation.module.scss";
import BackToBar from "../../components/UI/BackToBar/BackToBar";
import axios from "../../axios";
import Loading from "../../components/UI/Loading/Loading";

const EditAbbreviation = ({ history, match }) => {
  let [abbreviation, setAbbreviation] = useState({
    abbreviation: "",
    stands_for: "",
    description: "",
  });
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`/abbreviations/${match.params.id}.json`)
      .then((res) => {
        setAbbreviation(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [match.params.id]);
  const goBackHandler = () => history.goBack();
  return (
    <div className={EditAbbreviationStyle}>
      <BackToBar
        goBackHandler={goBackHandler}
        barTitle="Edit the abbreviation"
      />
      {loading ? (
        <div className={loadingStyle}>
          <Loading />
        </div>
      ) : (
        <form className={form}>
          <div className={form_group}>
            <label className={form_label}>Abbreviation</label>
            <input
              type="text"
              className={form_input}
              defaultValue={abbreviation.abbreviation}
              autoFocus
            ></input>
          </div>

          <div className={form_group}>
            <label className={form_label}>Stands for</label>
            <input
              type="text"
              className={form_input}
              defaultValue={abbreviation.description}
            ></input>
          </div>

          <div className={form_group}>
            <label className={form_label}>Brief description</label>
            <textarea
              className={form_textarea}
              rows="10"
              defaultValue={abbreviation.description}
            ></textarea>
          </div>

          <button className={form_submit}>Save</button>
        </form>
      )}
    </div>
  );
};

export default EditAbbreviation;
