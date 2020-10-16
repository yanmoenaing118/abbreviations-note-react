import React from "react";

import { form_group, form_label } from "./FormGroup.module.scss";

const FormGroup = (props) => {
  return (
    <div className={form_group}>
      <label className={form_label}>{props.formLabel}</label>
      <input type={props.inputType} />
    </div>
  );
};

export default FormGroup;
