import React from "react";
import { motion } from "framer-motion";
import classes from "./Backdrop.module.scss";

const variants = {
  visible: {
    scale: 1,
    transition: {
      duration: 0.2,
      type: "tween",
    },
  },
};

const Backdrop = (props) => {
  return (
    <motion.div
      className={classes.Backdrop}
      onClick={props.clicked}
      variants={variants}
      animate="visible"
    >
      {props.children}
    </motion.div>
  );
};

export default Backdrop;
