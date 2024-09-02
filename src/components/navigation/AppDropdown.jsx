import React from "react";
import PropTypes from "prop-types";
import { CDropdown } from "@coreui/react";

/**
 * AppDropdown wraps the CDropdown component to provide a consistent interface
 * and styling for dropdowns throughout the application.
 *
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - The content of the dropdown.
 * @param {string} [props.variant="nav-item"] - The variant of the dropdown.
 * @param {string} [props.placement="bottom-end"] - The placement of the dropdown.
 * @returns {JSX.Element} The AppDropdown component.
 */
const AppDropdown = ({
  children,
  variant = "nav-item",
  placement = "bottom-end",
  ...props
}) => {
  if (!children) {
    console.error("AppDropdown requires children to be passed as props.");
    return null;
  }

  return (
    <CDropdown className={variant} placement={placement} {...props}>
      {children}
    </CDropdown>
  );
};

AppDropdown.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  placement: PropTypes.string,
};

export default AppDropdown;
