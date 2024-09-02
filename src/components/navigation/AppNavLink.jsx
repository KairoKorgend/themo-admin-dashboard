import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { CNavLink } from "@coreui/react";

const AppNavLink = ({
  to = undefined,
  href = undefined,
  children,
  className = "",
  ...rest
}) => {
  return (
    <CNavLink
      as={to ? NavLink : "a"}
      to={to}
      href={href}
      className={className}
      {...rest}
    >
      {children}
    </CNavLink>
  );
};

AppNavLink.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default AppNavLink;
