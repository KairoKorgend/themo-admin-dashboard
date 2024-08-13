import React from "react";
import PropTypes from "prop-types";
import { CSidebarHeader } from "@coreui/react";

const AppSidebarHeader = ({
  children,
  className = "border-bottom",
  ...props
}) => {
  return (
    <CSidebarHeader className={className} {...props}>
      {children}
    </CSidebarHeader>
  );
};

AppSidebarHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default AppSidebarHeader;
