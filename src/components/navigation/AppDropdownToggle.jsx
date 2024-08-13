import React from "react";
import PropTypes from "prop-types";
import { CDropdownToggle } from "@coreui/react";

export const AppDropdownToggle = ({ children, caret = false, ...props }) => {
  return (
    <CDropdownToggle caret={caret} {...props}>
      {children}
    </CDropdownToggle>
  );
};

AppDropdownToggle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
