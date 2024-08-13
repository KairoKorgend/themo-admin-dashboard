import React from "react";
import PropTypes from "prop-types";
import { CRow } from "@coreui/react";

/**
 * AppRow wraps the CCol component to provide a consistent interface
 * and styling for grid columns throughout the application.
 *
 * @param {Object} props - Component props.
 * @returns {JSX.Element} The AppCol component.
 */

const AppRow = ({ className, children, ...rest }) => {
  return (
    <CRow className={`app-row ${className}`} {...rest}>
      {children}
    </CRow>
  );
};

AppRow.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default AppRow;
