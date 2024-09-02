import React from "react";
import PropTypes from "prop-types";
import { CDropdownDivider } from "@coreui/react";

/**
 * AppDropdownDivider wraps the CDropdownDivider component to provide a consistent interface
 * and styling for button groups throughout the application.
 *
 * @param {Object} props - Component props.
 * @returns {JSX.Element} The AppDropdownDivider component.
 */

const AppDropdownDivider = ({ children, ...props }) => {
  return <CDropdownDivider {...props}>{children}</CDropdownDivider>;
};

AppDropdownDivider.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default AppDropdownDivider;
