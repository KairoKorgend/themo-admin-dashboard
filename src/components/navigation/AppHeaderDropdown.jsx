import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "src/features/auth/authSlice.js";

import { CDropdownDivider } from "@coreui/react";

import {
  AppDropdown,
  AppDropdownItem,
  AppDropdownMenu,
  AppDropdownToggle,
} from "src/components/navigation/index";
import {
  AppIcon,
  AppAvatar,
  AppDropdownDivider,
} from "src/components/ui-elements/index";

import avatar from "src/assets/images/avatar.jpg";

export const AppHeaderDropdown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
    navigate("/login");
  };

  return (
    <AppDropdown variant="nav-item">
      <AppDropdownToggle
        placement="bottom-end"
        className="py-0 pe-0"
        caret={false}
      >
        <AppAvatar src={avatar} size="md" />
      </AppDropdownToggle>
      <AppDropdownMenu className="pt-2" placement="bottom-end">
        <AppDropdownItem href="#">
          <AppIcon name="cilUser" className="me-2" />
          Profile
        </AppDropdownItem>
        <AppDropdownItem href="#">
          <AppIcon name="cilSettings" className="me-2" />
          Settings
        </AppDropdownItem>
        <AppDropdownDivider />
        <AppDropdownItem onClick={handleLogout}>
          <AppIcon name="cilLockLocked" className="me-2" />
          Log out
        </AppDropdownItem>
      </AppDropdownMenu>
    </AppDropdown>
  );
};
