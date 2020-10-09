import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

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
  back_to_bar,
} from "./EditAbbreviation.module.scss";

const EditAbbreviation = (props) => {
  const goBackHandler = () => props.history.goBack();
  return (
    <div className={EditAbbreviationStyle}>
      <div className={back_to_bar}>
        <FontAwesomeIcon icon={faArrowLeft} size="lg" onClick={goBackHandler} />
        <h3>Edit the abbreviation</h3>
      </div>
      <form className={form}>
        <div className={form_group}>
          <label className={form_label}>Abbreviation</label>
          <input type="text" className={form_input} autoFocus></input>
        </div>

        <div className={form_group}>
          <label className={form_label}>Stands for</label>
          <input type="text" className={form_input}></input>
        </div>

        <div className={form_group}>
          <label className={form_label}>Brief description</label>
          <textarea
            className={form_textarea}
            rows="10"
            placeholder="Enter description"
          ></textarea>
        </div>

        <button className={form_submit}>Save</button>
      </form>
    </div>
  );
};

export default EditAbbreviation;
