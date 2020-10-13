import React from "react";

import {
  faAddressCard,
  faComment,
  faListAlt,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

import { list } from "./Lists.module.scss";
import ListItem from "./ListItem/ListItem";

const Lists = () => {
  return (
    <div className={list}>
      <ListItem icon={faUser} text="Your Profile" />
      <ListItem icon={faListAlt} text="Your Abbreviations" />
      <ListItem icon={faUsers} text="About us" />
      <ListItem icon={faAddressCard} text="Contact us" />
      <ListItem icon={faComment} text="Write us a feedback" />
    </div>
  );
};

export default Lists;
