import React from "react";
import PropTypes from "prop-types";
import { CForm } from "@coreui/react";

export const AppForm = ({ className = "", children, ...rest }) => {
  return (
    <CForm className={`app-form ${className}`} {...rest}>
      {children}
    </CForm>
  );
};

AppForm.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
