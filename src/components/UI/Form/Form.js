import React from "react";

import { form, form_inputbox, form_submit } from "./Form.module.scss";

const Form = (props) => {
  return (
    <form className={form} autoComplete="off">
      <div className={form_inputbox}>{props.children}</div>
      <button className={form_submit}>{props.submitText}</button>
    </form>
  );
};

export default Form;
