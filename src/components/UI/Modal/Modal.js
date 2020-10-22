import React from "react";
import { motion } from "framer-motion";
import classes from "./Modal.module.scss";
import Backdrop from "./../Backdrop/Backdrop";

const Modal = (props) => (
  <Backdrop clicked={props.close}>
    <motion.div
      className={classes.Modal}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
      }}
    >
      {props.children}
    </motion.div>
  </Backdrop>
);

export default Modal;
