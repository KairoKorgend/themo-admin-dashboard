import React from "react";
import PropTypes from "prop-types";
import { CHeaderNav } from "@coreui/react";

export const AppHeaderNav = ({ children, ...props }) => {
  return <CHeaderNav {...props}>{children}</CHeaderNav>;
};

AppHeaderNav.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
