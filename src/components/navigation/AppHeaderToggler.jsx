import React from "react";
import PropTypes from "prop-types";
import { CHeaderToggler } from "@coreui/react";

const AppHeaderToggler = ({
  children,
  style = { marginInlineStart: "-14px" },
  ...props
}) => {
  return (
    <CHeaderToggler style={style} {...props}>
      {children}
    </CHeaderToggler>
  );
};

AppHeaderToggler.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default AppHeaderToggler;
