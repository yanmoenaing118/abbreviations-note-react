import React from "react";

import { lds_ring } from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={lds_ring}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loading;
