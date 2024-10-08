import React from "react";
import PropTypes from "prop-types";
import { CDropdownMenu } from "@coreui/react";

const AppDropdownMenu = ({ children, ...props }) => {
  return <CDropdownMenu {...props}>{children}</CDropdownMenu>;
};

AppDropdownMenu.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default AppDropdownMenu;
