import React from "react";

import { AppNavItem } from "src/components/navigation/AppNavItem.jsx";
import { AppIcon } from "src/components/ui-elements/index";

const _nav = [
  {
    component: AppNavItem,
    name: "Dashboard",
    to: "/dashboard",
    icon: <AppIcon name="cilSpeedometer" customClassName="nav-icon" />,
    badge: {
      color: "info",
    },
  },
  {
    component: AppNavItem,
    name: "Devices",
    to: "/devices",
    icon: <AppIcon name="cilDevices" customClassName="nav-icon" />,
  },
  {
    component: AppNavItem,
    name: "Users",
    to: "/users",
    icon: <AppIcon name="cilPeople" customClassName="nav-icon" />,
  },
];

export default _nav;
