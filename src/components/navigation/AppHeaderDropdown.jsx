import React from "react";

import {
  AppDropdown,
  AppDropdownItem,
  AppDropdownMenu,
  AppDropdownToggle,
} from "src/components/navigation/index";
import { AppIcon } from "src/components/ui-elements/index";

export const AppHeaderDropdown = () => {
  return (
    <AppDropdown variant="nav-item">
      <AppDropdownToggle placement="bottom-end" className="py-0 pe-0">
        <AppIcon name="cilUser" size="xl" className="mt-2" />
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
        <AppDropdownItem href="#">
          <AppIcon name="cilLockLocked" className="me-2" />
          Log out
        </AppDropdownItem>
      </AppDropdownMenu>
    </AppDropdown>
  );
};
