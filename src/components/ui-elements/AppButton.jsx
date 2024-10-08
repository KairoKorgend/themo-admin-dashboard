import React from "react";
import PropTypes from "prop-types";
import { CButton } from "@coreui/react";
import "./styles/AppButton.scss";

/**
 * AppButton wraps the CButton component to provide a consistent interface
 * and styling for buttons throughout the application.
 *
 * @param {Object} props - Component props.
 * @returns {JSX.Element} The AppButton component.
 */

const AppButton = ({ className, children, ...rest }) => {
  return (
    <CButton className={`btn-cd-primary ${className}`} {...rest}>
      {children}
    </CButton>
  );
};

AppButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default AppButton;
