import React from "react";
import PropTypes from "prop-types";
import { CDropdown } from "@coreui/react";

export const AppDropdown = ({
  children,
  variant = "nav-item",
  placement = "bottom-end",
  ...props
}) => {
  return (
    <CDropdown variant={variant} placement={placement} {...props}>
      {children}
    </CDropdown>
  );
};

AppDropdown.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
