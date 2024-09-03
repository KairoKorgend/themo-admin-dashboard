import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CSidebar } from "@coreui/react";
import useAppColorMode from "src/hooks/useAppColorMode"; // Adjust the import path as necessary

import styles from "src/scss/SharedStyles.module.scss";

import {
  AppSidebarHeader,
  AppSidebarFooter,
  AppCloseButton,
  AppSidebarNav,
  AppNavItem,
  AppIcon,
} from "src/components/index";
import { set } from "src/features/ui/uiSlice";

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
  const sidebarShow = useSelector((state) => state.ui.sidebarShow);
  const { colorMode } = useAppColorMode();

  useEffect(() => {
    const body = document.body;
    body.setAttribute("data-coreui-theme", colorMode);
  }, [colorMode]);

  return (
    <CSidebar
      className="border-end"
      colorScheme="light"
      position="fixed"
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch(set({ sidebarShow: visible }));
      }}
    >
      <AppSidebarHeader>
        <div
          className={styles.logoImage}
          style={{
            height: 32,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundImage: "var(--logo-light)",
          }}
        ></div>
        <AppCloseButton onClick={() => dispatch(set({ sidebarShow: false }))} />
      </AppSidebarHeader>
      <AppSidebarNav items={navigation} />
      <AppSidebarFooter></AppSidebarFooter>
    </CSidebar>
  );
};

export default React.memo(AppSidebar);
