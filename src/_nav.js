import React from "react";
import { CNavItem } from "@coreui/react";

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
    name: "Colors",
    to: "/theme/colors",
    icon: <AppIcon name="cilDrop" customClassName="nav-icon" />,
  },
  {
    component: AppNavItem,
    name: "Typography",
    to: "/theme/typography",
    icon: <AppIcon name="cilPencil" customClassName="nav-icon" />,
  },
];

export default _nav;
