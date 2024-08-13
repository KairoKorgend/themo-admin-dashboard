import React from "react";
import PropTypes from "prop-types";
import { CCard } from "@coreui/react";

/**
 * AppCard wraps the CCard component to provide a consistent interface
 * and styling for cards throughout the application.
 *
 * @param {Object} props - Component props.
 * @returns {JSX.Element} The AppCard component.
 */

export const AppCard = ({ className, children, ...rest }) => {
  return (
    <CCard className={`app-card ${className}`} {...rest}>
      {children}
    </CCard>
  );
};

AppCard.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
