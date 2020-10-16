import React from "react";
import { Link } from "react-router-dom";

import Form from "./../../../components/UI/Form/Form";
import FormGroup from "./../../../components/UI/Form/FormGroup/FormGroup";

import { Signup as SignupStyle, box, have_account } from "./Signup.module.scss";

const Signup = (props) => {
  return (
    <div className={SignupStyle}>
      <div className={box}>
        <h1>Sign up</h1>
        <Form submitText="Sign up">
          <FormGroup formLabel="Full Name" inputType="text" />
          <FormGroup formLabel="Email" inputType="email" />
          <FormGroup formLabel="Password" inputType="password" />
          <FormGroup formLabel="Retype Password" inputType="password" />
        </Form>
        <div className={have_account}>
          <p>Already have an account?</p>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
