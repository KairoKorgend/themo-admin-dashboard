import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "src/features/auth/authSlice.js";

import "./styles/AppHeaderDropdown.scss";

import {
  AppDropdown,
  AppDropdownItem,
  AppDropdownMenu,
  AppDropdownToggle,
  AppIcon,
  AppAvatar,
  AppDropdownDivider,
} from "src/components/index";

const AppHeaderDropdown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
    navigate("/login");
  };

  const handleAccountClick = () => {
    navigate("/account");
  };

  const handleSettingsClick = () => {
    navigate("/settings");
  };

  return (
    <AppDropdown variant="nav-item">
      <AppDropdownToggle
        placement="bottom-end"
        className="py-0 pe-0"
        caret={false}
      >
        <AppAvatar className="user-avatar" size="md">
          <AppIcon name="cilUser" className="text-white" size="xl" />
        </AppAvatar>
      </AppDropdownToggle>
      <AppDropdownMenu className="pt-2" placement="bottom-end">
        <AppDropdownItem onClick={handleAccountClick}>
          <AppIcon name="cilUser" className="me-2" />
          Account
        </AppDropdownItem>
        <AppDropdownItem onClick={handleSettingsClick}>
          <AppIcon name="cilSettings" className="me-2" />
          Settings
        </AppDropdownItem>
        <AppDropdownDivider />
        <AppDropdownItem onClick={handleLogout}>
          <AppIcon name="cilAccountLogout" className="me-2" />
          Log out
        </AppDropdownItem>
      </AppDropdownMenu>
    </AppDropdown>
  );
};

export default AppHeaderDropdown;
