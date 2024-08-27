import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CHeader } from "@coreui/react";

import { AppContainer } from "src/components/layout/index.js";
import { AppIcon } from "src/components/ui-elements/index";
import {
  AppDropdown,
  AppDropdownItem,
  AppDropdownMenu,
  AppDropdownToggle,
  AppHeaderDropdown,
  AppHeaderNav,
  AppHeaderToggler,
} from "src/components/navigation/index.js";
import useAppColorMode from "src/hooks/useAppColorMode";
import { set } from "src/features/ui/uiSlice";

const AppHeader = () => {
  const headerRef = useRef();
  const { colorMode, setColorMode } = useAppColorMode();

  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.ui.sidebarShow);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      headerRef.current &&
        headerRef.current.classList.toggle(
          "shadow-sm",
          document.documentElement.scrollTop > 0
        );
    });
  }, []);

  return (
    <CHeader position="sticky" className="mb-4 p-0" ref={headerRef}>
      <AppContainer className="border-bottom px-4" fluid>
        <AppHeaderToggler
          onClick={() => {
            console.log("Toggler clicked");
            dispatch(set({ sidebarShow: !sidebarShow }));
          }}
        >
          <AppIcon name="cilMenu" size="lg" />
        </AppHeaderToggler>
        <AppHeaderNav>
          <li className="nav-item py-1">
            <div className="vr h-100 mx-2 text-body text-opacity-75"></div>
          </li>
          <AppDropdown variant="nav-item" placement="bottom-end">
            <AppDropdownToggle>
              {colorMode === "dark" ? (
                <AppIcon name="cilMoon" size="lg" />
              ) : colorMode === "auto" ? (
                <AppIcon name="cilContrast" size="lg" />
              ) : (
                <AppIcon name="cilSun" size="lg" />
              )}
            </AppDropdownToggle>
            <AppDropdownMenu>
              <AppDropdownItem
                active={colorMode === "light"}
                onClick={() => setColorMode("light")}
              >
                <AppIcon className="me-2" name="cilSun" size="lg" /> Light
              </AppDropdownItem>
              <AppDropdownItem
                active={colorMode === "dark"}
                onClick={() => setColorMode("dark")}
              >
                <AppIcon className="me-2" name="cilMoon" size="lg" /> Dark
              </AppDropdownItem>
              <AppDropdownItem
                active={colorMode === "auto"}
                onClick={() => setColorMode("auto")}
              >
                <AppIcon className="me-2" name="cilContrast" size="lg" /> Auto
              </AppDropdownItem>
            </AppDropdownMenu>
          </AppDropdown>
          <li className="nav-item py-1">
            <div className="vr h-100 mx-2 text-body text-opacity-75"></div>
          </li>
          <AppHeaderDropdown />
        </AppHeaderNav>
      </AppContainer>
    </CHeader>
  );
};

export default AppHeader;
