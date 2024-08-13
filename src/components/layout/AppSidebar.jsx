import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CSidebar } from "@coreui/react";

import {
  AppSidebarHeader,
  AppSidebarFooter,
} from "src/components/layout/index";
import { AppCloseButton } from "src/components/ui-elements/index";
import { AppSidebarNav } from "src/components/navigation/AppSidebarNav";
import logo from "src/assets/brand/logo.svg";
import navigation from "src/_nav";

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
