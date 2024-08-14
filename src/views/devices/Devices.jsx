import React, { useState, useEffect } from "react";

import { AppRow } from "src/components/layout/index";
import {
  AppSmartTable,
  AppCard,
  AppCardBody,
} from "src/components/ui-elements/index";

const Devices = () => {
  const [devicesData, setDevicesData] = useState([]);

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/devices");
        const data = await response.json();
        setDevicesData(data);
      } catch (error) {
        console.error("Error fetching devices:", error);
      }
    };

    fetchDevices();
  }, []);

  const deleteDevice = async (id) => {
    try {
      await fetch(`http://localhost:8000/api/devices/${id}`, {
        method: "DELETE",
      });
      setDevicesData(devicesData.filter((device) => device.Id !== id));
    } catch (error) {
      console.error("Error deleting device:", error);
    }
  };

  const columns = [
    {
      key: "deviceName",
      _style: { width: "15%" },
    },
    "info",
    {
      key: "client",
      _style: { width: "15%" },
    },
    {
      key: "deviceType",
      _style: { width: "15%" },
    },
    {
      key: "power",
      _style: { width: "10%" },
    },
    {
      key: "timeStamp",
      _style: { width: "20%" },
    },
    {
      key: "selections",
      label: "",
      _style: { width: "1%" },
      filter: false,
      sorter: false,
    },
  ];

  return (
    <>
      <h3 className="content-header">Device Management</h3>
      <AppCard className="mb-4 mt-4">
        <AppCardBody>
          <AppRow>
            <AppSmartTable
              columns={columns}
              devicesData={devicesData}
              deleteDevice={deleteDevice}
            />
          </AppRow>
        </AppCardBody>
      </AppCard>
    </>
  );
};

export default Devices;
