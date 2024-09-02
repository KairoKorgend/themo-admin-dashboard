import React from "react";
import PropTypes from "prop-types";
import { CDropdownToggle } from "@coreui/react";

const AppDropdownToggle = ({ children, ...props }) => {
  return <CDropdownToggle {...props}>{children}</CDropdownToggle>;
};

AppDropdownToggle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default AppDropdownToggle;
