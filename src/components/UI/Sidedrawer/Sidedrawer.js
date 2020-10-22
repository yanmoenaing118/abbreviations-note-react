import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faUser,
  faListAlt,
  faUsers,
  faAddressCard,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import AuthContext from "../../../context/authContext";
import ListItem from "../Lists/ListItem/ListItem";
import Lists from "../Lists/Lists";

import { sidedrawer, logout_btn } from "./Sidedrawer.module.scss";
import SidedrawerHeader from "./SidedrawerComponents/SidedrawerHeader";
import Backdrop from "../Backdrop/Backdrop";

const variants = {
  hidden: {
    x: "-100vw",
    transition: {
      duration: 0.2,
      type: "tween",
    },
  },

  visible: {
    x: "0",
    transition: {
      type: "tween",
    },
  },
};

const Sidedrawer = ({ setShowSidedrawer }) => {
  let context = useContext(AuthContext);
  return (
    <Backdrop clicked={() => setShowSidedrawer(false)}>
      <motion.div
        className={sidedrawer}
        variants={variants}
        initial="hidden"
        animate="visible"
        onClick={(e) => e.stopPropagation()}
      >
        <SidedrawerHeader />
        <Lists>
          <ListItem icon={faUser} text="Your Profile" />
          <ListItem icon={faListAlt} text="Your Abbreviations" />
          <ListItem icon={faUsers} text="About us" />
          <ListItem icon={faAddressCard} text="Contact us" />
          <ListItem icon={faComment} text="Write us a feedback" />
        </Lists>
        {true ? (
          <button className={logout_btn} onClick={context.logout}>
            <div>
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>
            <span>Logout</span>
          </button>
        ) : null}
      </motion.div>
    </Backdrop>
  );
};

export default Sidedrawer;
