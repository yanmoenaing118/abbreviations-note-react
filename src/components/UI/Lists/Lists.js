import React from "react";

import { list } from "./Lists.module.scss";

const Lists = (props) => {
  return <div className={list}>{props.children}</div>;
};

export default Lists;
