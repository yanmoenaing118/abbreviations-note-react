import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Form from "./../../components/UI/Form/Form";
import FormGroup from "./../../components/UI/Form/FormGroup/FormGroup";
import classes from "./Auth.module.scss";
import {
  faCheckSquare,
  faEnvelopeSquare,
  faKey,
  faUser,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const formVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
    },
  },
};

const Auth = ({ location }) => {
  //   console.log(props);
  const [isLogin, setIsLogin] = useState(null);

  useEffect(() => {
    console.log(location.search);
    if (location.search === "?isLogin=true") {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [location.search]);

  const renderForm = () => {
    let form = (
      <motion.div variants={formVariants} initial="hidden" animate="visible">
        <Form>
          <FormGroup formLabel="Full Name *" inputType="text" icon={faUser} />
          <FormGroup
            formLabel="Email *"
            inputType="email"
            icon={faEnvelopeSquare}
          />
          <FormGroup formLabel="Password *" inputType="password" icon={faKey} />
          <FormGroup
            formLabel="Retype Password *"
            inputType="password"
            icon={faCheckSquare}
          />
        </Form>
      </motion.div>
    );
    if (isLogin) {
      form = (
        <motion.div variants={formVariants} initial="hidden" animate="visible">
          <Form>
            <FormGroup
              formLabel="Email"
              inputType="email"
              icon={faEnvelopeSquare}
            />
            <FormGroup formLabel="Password" inputType="password" icon={faKey} />
          </Form>
        </motion.div>
      );
    }
    return form;
  };

  console.log(classes.Auth_Header);

  return (
    <motion.div
      className={classes.Auth}
      variants={formVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={classes.Auth_Header}>
        <div>
          <FontAwesomeIcon icon={faUserCircle} size="5x" />
        </div>
        {/* <h1>{isLogin ? "Log in" : "Create an account"}</h1> */}
      </div>
      <div className={classes.box}>
        {renderForm()}
        <div className={classes.have_account}>
          <p>
            {isLogin ? "Dont't have a account?" : "Already have an account?"}
          </p>
          <Link to={isLogin ? "/auth/?isSignup=true" : "/auth/?isLogin=true"}>
            {isLogin ? "Sign up >" : "Log in >"}
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Auth;
