import React from "react";
import PropTypes from "prop-types";
import { CSpinner } from "@coreui/react";

const AppSpinner = ({ color = "primary", ...props }) => {
  return <CSpinner color={color} {...props} />;
};

AppSpinner.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  color: PropTypes.string,
};

export default AppSpinner;
