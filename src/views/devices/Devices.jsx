import React from "react";
import {
  AppDropdown,
  AppDropdownToggle,
  AppDropdownMenu,
  AppDropdownItem,
  AppSmartTable,
  AppButton,
  AppIcon,
} from "src/components/index";
import styles from "./Devices.module.scss";

const Devices = () => {
  return (
    <>
      <div className={styles.headerContainer}>
        <div>
          <h3 className={styles.headerText}>Devices</h3>
        </div>
        <div className={styles.headerButtons}>
          <AppButton className={styles.addDeviceBtn} color="primary">
            <AppIcon name="cilPlus" className="me-2" />
            Add Device
          </AppButton>
          <AppDropdown>
            <AppDropdownToggle className={styles.navItem} color="primary">
              Quick Actions
            </AppDropdownToggle>
            <AppDropdownMenu>
              <AppDropdownItem>Choice</AppDropdownItem>
            </AppDropdownMenu>
          </AppDropdown>
        </div>
      </div>
      <AppSmartTable />
    </>
  );
};

export default Devices;
