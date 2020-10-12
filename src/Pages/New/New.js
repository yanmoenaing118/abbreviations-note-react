import React, { useState } from "react";
import witHeader from "../../hoc/withHeader";

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
    };
    fetch("http://localhost:9000/api/v1/abbreviations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json.data);
        history.goBack();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className={NewStyle}>
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

export default witHeader(New);
