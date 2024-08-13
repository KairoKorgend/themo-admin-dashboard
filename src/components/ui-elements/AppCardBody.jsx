import React from "react";
import PropTypes from "prop-types";
import { CCardBody } from "@coreui/react";

/**
 * AppCardBody wraps the CCardBody component to provide a consistent interface
 * and styling for card bodies throughout the application.
 *
 * @param {Object} props - Component props.
 * @returns {JSX.Element} The AppCardBody component.
 */

export const AppCardBody = ({ className, children, ...rest }) => {
  return (
    <CCardBody className={`app-card-body ${className}`} {...rest}>
      {children}
    </CCardBody>
  );
};

AppCardBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
