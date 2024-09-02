import React from "react";
import { useEffect } from "react";
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
  useEffect(() => {
    document.title = "Themo | Devices";
  }, []);

  return (
    <>
      <div className={styles.headerContainer}>
        <div>
          <h3 className={styles.headerText}>Devices</h3>
        </div>
        <div className={styles.headerButtons}>
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
