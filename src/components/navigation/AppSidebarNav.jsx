import React from "react";
import PropTypes from "prop-types";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { CSidebarNav } from "@coreui/react";

import { AppNavLink } from "src/components/navigation/index";

export const AppSidebarNav = ({ items }) => {
  const navLink = (name, icon, indent = false) => {
    return (
      <>
        {icon
          ? icon
          : indent && (
              <span className="nav-icon">
                <span className="nav-icon-bullet"></span>
              </span>
            )}
        {name && name}
      </>
    );
  };

  const navItem = (item, index, indent = false) => {
    const { component, name, badge, icon, ...rest } = item;
    const Component = component;
    return (
      <Component as="div" key={index}>
        {rest.to || rest.href ? (
          <AppNavLink to={rest.to} href={rest.href} {...rest}>
            {navLink(name, icon, badge, indent)}
          </AppNavLink>
        ) : (
          navLink(name, icon, badge, indent)
        )}
      </Component>
    );
  };

  const navGroup = (group, index) => {
    return (
      <React.Fragment key={index}>
        {group.items.map((item, idx) => navItem(item, idx, true))}
      </React.Fragment>
    );
  };

  return (
    <CSidebarNav as={SimpleBar}>
      {items &&
        items.map((item, index) =>
          item.items ? navGroup(item, index) : navItem(item, index)
        )}
    </CSidebarNav>
  );
};

AppSidebarNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
};
