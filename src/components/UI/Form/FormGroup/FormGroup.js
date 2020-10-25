import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import {
  form_group,
  form_label,
  form_icon,
  form_input,
} from "./FormGroup.module.scss";

const FormGroup = (props) => {
  return (
    <div className={form_group}>
      <label className={form_label}>{props.formLabel}</label>
      <div className={form_input}>
        <input type={props.inputType} />
        <div className={form_icon}>
          <FontAwesomeIcon icon={props.icon} />
        </div>
      </div>
    </div>
  );
};

export default FormGroup;
