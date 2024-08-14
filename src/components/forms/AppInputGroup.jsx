import React from "react";
import PropTypes from "prop-types";
import { CInputGroup } from "@coreui/react";

export const AppInputGroup = ({ className = "", children, ...rest }) => {
  return (
    <CInputGroup className={`app-input-group ${className}`} {...rest}>
      {children}
    </CInputGroup>
  );
};

AppInputGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
