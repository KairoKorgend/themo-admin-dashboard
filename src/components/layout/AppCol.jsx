import React from "react";
import PropTypes from "prop-types";
import { CCol } from "@coreui/react";

/**
 * AppCol wraps the CCol component to provide a consistent interface
 * and styling for grid columns throughout the application.
 *
 * @param {Object} props - Component props.
 * @returns {JSX.Element} The AppCol component.
 */

const AppCol = ({ className, children, ...rest }) => {
  return (
    <CCol className={`app-col ${className}`} {...rest}>
      {children}
    </CCol>
  );
};

AppCol.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default AppCol;
