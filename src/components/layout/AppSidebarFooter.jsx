import React from "react";
import PropTypes from "prop-types";
import { CSidebarFooter } from "@coreui/react";

const AppSidebarFooter = ({
  children,
  className = "border-top d-none d-lg-flex",
  ...props
}) => {
  return (
    <CSidebarFooter className={className} {...props}>
      {children}
    </CSidebarFooter>
  );
};

AppSidebarFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default AppSidebarFooter;
