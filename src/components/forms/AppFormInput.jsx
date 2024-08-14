import React from "react";
import PropTypes from "prop-types";
import { CFormInput } from "@coreui/react";

export const AppFormInput = ({ className = "", ...rest }) => {
  return <CFormInput className={`app-form-input ${className}`} {...rest} />;
};

AppFormInput.propTypes = {
  className: PropTypes.string,
};
