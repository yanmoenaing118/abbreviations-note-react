import React, { useState } from "react";
import BackToBar from "./../../components/UI/BackToBar/BackToBar";
import axios from "./../../axios";

import {
  New as NewStyle,
  form,
  form_group,
  form_label,
  form_input,
  form_textarea,
  form_submit,
} from "./New.module.scss";

const New = ({ history }) => {
  const [abbreviation, setAbbreviation] = useState("");
  const [stands_for, setStands_for] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      abbreviation,
      stands_for,
      description,
      favorite: false,
    };

    axios
      .post("/abbreviations.json", data)
      .then((res) => {
        history.push("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className={NewStyle}>
      <BackToBar
        barTitle="Add New Abbreviation"
        goBackHandler={() => history.goBack()}
      />
      <form className={form}>
        <div className={form_group}>
          <label className={form_label}>Abbreviation</label>
          <input
            type="text"
            className={form_input}
            autoFocus
            onChange={(e) => setAbbreviation(e.target.value)}
            value={abbreviation}
          ></input>
        </div>

        <div className={form_group}>
          <label className={form_label}>Stands for</label>
          <input
            type="text"
            className={form_input}
            onChange={(e) => setStands_for(e.target.value)}
            value={stands_for}
          ></input>
        </div>

        <div className={form_group}>
          <label className={form_label}>Brief description</label>
          <textarea
            className={form_textarea}
            rows="10"
            placeholder="Enter description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
        </div>

        <button className={form_submit} onClick={submitHandler}>
          Save
        </button>
      </form>
    </div>
  );
};

export default New;
