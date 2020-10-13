import React, { useState, useEffect } from "react";

import {
  form,
  form_group,
  form_label,
  form_input,
  form_textarea,
  form_submit,
} from "./../New/New.module.scss";
import { EditAbbreviation as EditAbbreviationStyle } from "./EditAbbreviation.module.scss";
import BackToBar from "../../components/UI/BackToBar/BackToBar";

const EditAbbreviation = ({ history, match }) => {
  let [abbreviation, setAbbreviation] = useState({
    abbreviation: "",
    stands_for: "",
    description: "",
  });

  useEffect(() => {
    fetch(`http://localhost:9000/api/v1/abbreviations/${match.params.id}`)
      .then((res) => res.json())
      .then((json) => {
        setAbbreviation(json.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [match.params.id]);
  const goBackHandler = () => history.goBack();
  return (
    <div className={EditAbbreviationStyle}>
      <BackToBar
        goBackHandler={goBackHandler}
        barTitle="Edit the abbreviation"
      />
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
    </div>
  );
};

export default EditAbbreviation;
