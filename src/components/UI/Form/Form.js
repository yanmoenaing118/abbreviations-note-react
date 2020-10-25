import React from "react";

import { form, form_inputbox, form_submit } from "./Form.module.scss";

const Form = (props) => {
  return (
    <form className={form} autoComplete="off">
      {props.children}
      <button className={form_submit}>Submit</button>
    </form>
  );
};

export default Form;
