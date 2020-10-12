import React from "react";

import Header from "../Layout/Header/Header";

const witHeader = (WrappedComponent) => {
  return (props) => {
    return (
      <>
        <Header />
        <WrappedComponent {...props} />
      </>
    );
  };
};

export default witHeader;
