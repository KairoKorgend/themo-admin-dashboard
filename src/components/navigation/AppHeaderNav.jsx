import React from "react";
import PropTypes from "prop-types";
import { CHeaderNav } from "@coreui/react";

const AppHeaderNav = ({ children, ...props }) => {
  return <CHeaderNav {...props}>{children}</CHeaderNav>;
};

AppHeaderNav.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default AppHeaderNav;
