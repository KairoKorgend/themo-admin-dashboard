import React from "react";
import PropTypes from "prop-types";
import { CButtonGroup } from "@coreui/react";

/**
 * AppButtonGroup wraps the CButtonGroup component to provide a consistent interface
 * and styling for button groups throughout the application.
 *
 * @param {Object} props - Component props.
 * @returns {JSX.Element} The AppButtonGroup component.
 */

export const AppButtonGroup = ({ className, children, ...rest }) => {
  return (
    <CButtonGroup className={`app-button-group ${className}`} {...rest}>
      {children}
    </CButtonGroup>
  );
};

AppButtonGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
