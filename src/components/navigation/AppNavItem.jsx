import React from "react";
import PropTypes from "prop-types";
import { CNavItem } from "@coreui/react";

const AppNavItem = ({ children, ...props }) => {
  return <CNavItem {...props}>{children}</CNavItem>;
};

AppNavItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default AppNavItem;
