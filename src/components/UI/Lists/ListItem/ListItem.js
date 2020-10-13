import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  list_item,
  list_item_icon,
  list_item_text,
} from "./ListItem.module.scss";

const ListItem = ({ icon, text }) => {
  return (
    <div className={list_item}>
      <div className={list_item_icon}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <p className={list_item_text}>{text}</p>
    </div>
  );
};

export default ListItem;
