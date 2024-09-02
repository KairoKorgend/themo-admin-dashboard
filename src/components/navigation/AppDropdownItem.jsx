import React from "react";
import PropTypes from "prop-types";
import { CDropdownItem } from "@coreui/react";

const AppDropdownItem = ({
  children,
  className = "d-flex align-items-center",
  as = "button",
  type = "button",
  ...props
}) => {
  return (
    <CDropdownItem className={className} as={as} type={type} {...props}>
      {children}
    </CDropdownItem>
  );
};

AppDropdownItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default AppDropdownItem;
