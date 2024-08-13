import React from "react";
import PropTypes from "prop-types";
import { CCloseButton } from "@coreui/react";

export const AppCloseButton = ({
  children,
  className = "d-lg-none",
  dark = true,
  ...props
}) => {
  return (
    <CCloseButton className={className} dark={dark} {...props}>
      {children}
    </CCloseButton>
  );
};

AppCloseButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  dark: PropTypes.bool,
  onClick: PropTypes.func,
};
