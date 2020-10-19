import React from "react";

import Header from "../Layout/Header/Header";

const witHeader = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <>
          <Header />
          <WrappedComponent {...this.props} />
        </>
      );
    }
  };
};

export default witHeader;
