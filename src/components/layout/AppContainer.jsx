import React from "react";
import PropTypes from "prop-types";
import { CContainer } from "@coreui/react";

const AppContainer = ({ children, className = "px-4", ...props }) => {
  return (
    <CContainer className={className} {...props}>
      {children}
    </CContainer>
  );
};

AppContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default AppContainer;
