import React from "react";
import { Link } from "react-router-dom";

import Form from "./../../../components/UI/Form/Form";
import FormGroup from "./../../../components/UI/Form/FormGroup/FormGroup";

import { login, box, have_account } from "./Login.module.scss";

const Login = (props) => {
  return (
    <div className={login}>
      <div className={box}>
        <h1>Login</h1>
        <Form submitText="Log in">
          <FormGroup formLabel="Email" inputType="email" />
          <FormGroup formLabel="Password" inputType="password" />
        </Form>
        <div className={have_account}>
          <p>Don't have an account?</p>
          <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
