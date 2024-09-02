import React from "react";
import PropTypes from "prop-types";
import { CInputGroupText } from "@coreui/react";

const AppInputGroupText = ({ className = "", children, ...rest }) => {
  return (
    <CInputGroupText className={`app-input-group-text ${className}`} {...rest}>
      {children}
    </CInputGroupText>
  );
};

AppInputGroupText.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default AppInputGroupText;
