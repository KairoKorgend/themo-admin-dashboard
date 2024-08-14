import React from "react";
import PropTypes from "prop-types";
import CIcon from "@coreui/icons-react";
import * as icons from "src/icons";

export const AppIcon = ({ name, className = "", ...props }) => {
  const IconComponent = icons[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" does not exist.`);
    return null;
  }

  return <CIcon icon={IconComponent} className={className} {...props} />;
};

AppIcon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};
