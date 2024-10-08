import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { CFormInput } from "@coreui/react";

const AppFormInput = forwardRef(({ className = "", ...rest }, ref) => {
  return (
    <CFormInput ref={ref} className={`app-form-input ${className}`} {...rest} />
  );
});

AppFormInput.propTypes = {
  className: PropTypes.string,
};

export default AppFormInput;
