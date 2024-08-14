import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CSidebar } from "@coreui/react";

import {
  AppSidebarHeader,
  AppSidebarFooter,
} from "src/components/layout/index";
import { AppCloseButton } from "src/components/ui-elements/index";
import { AppSidebarNav } from "src/components/navigation/AppSidebarNav";
import { AppNavItem } from "src/components/navigation/AppNavItem.jsx";
import { AppIcon } from "src/components/ui-elements/index";
import logo from "src/assets/brand/logo.svg";

const navigation = [
  {
    component: AppNavItem,
    name: "Dashboard",
    to: "/dashboard",
    icon: <AppIcon name="cilSpeedometer" customClassName="nav-icon" />,
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

const AppSidebar = () => {
  const dispatch = useDispatch();
  const unfoldable = useSelector((state) => state.sidebarUnfoldable);
  const sidebarShow = useSelector((state) => state.sidebarShow);

  return (
    <CSidebar
      className="border-end"
      colorScheme="dark"
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: "set", sidebarShow: visible });
      }}
    >
      <AppSidebarHeader>
        <img src={logo} alt="Logo" height={32} />
        <AppCloseButton
          onClick={() => dispatch({ type: "set", sidebarShow: false })}
        />
      </AppSidebarHeader>
      <AppSidebarNav items={navigation} />
      <AppSidebarFooter></AppSidebarFooter>
    </CSidebar>
  );
};

export default React.memo(AppSidebar);
