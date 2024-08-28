import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  CSmartTable,
  CCard,
  CCardBody,
  CRow,
  CCol,
  CCardTitle,
  CCardSubtitle,
} from "@coreui/react-pro";

import { AppIcon, AppButton } from "src/components/ui-elements/index";

import styles from "./styles/AppSmartTable.module.scss";

export const AppSmartTable = ({
  itemsPerPage = 5,
  sorterValue = { column: "status", state: "asc" },
  noItemsLabel = "No devices found",
  ...rest
}) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const initialDevices = [
    {
      Id: 1,
      deviceName: "Device 1",
      info: "Info 1",
      client: "Client 1",
      deviceType: "Type 1",
      power: "100W",
      timeStamp: "2023-10-01T10:00:00Z",
    },
    {
      Id: 2,
      deviceName: "Device 2",
      info: "Info 2",
      client: "Client 2",
      deviceType: "Type 2",
      power: "200W",
      timeStamp: "2023-10-02T11:00:00Z",
    },
    {
      Id: 3,
      deviceName: "Device 1",
      info: "Info 1",
      client: "Client 1",
      deviceType: "Type 1",
      power: "100W",
      timeStamp: "2023-10-01T10:00:00Z",
    },
    {
      Id: 4,
      deviceName: "Device 4",
      info: "Info 2",
      client: "Client 2",
      deviceType: "Type 2",
      power: "200W",
      timeStamp: "2023-10-02T11:00:00Z",
    },
  ];

  const handleExport = () => {
    const selectedData = initialDevices.filter((device) =>
      selectedItems.includes(device.Id)
    );
    console.log("Exporting data:", selectedData);
  };

  const deleteDevice = (id) => {
    console.log(`Deleting device with ID: ${id}`);
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
      label: "Actions",
      _style: { width: "1%" },
      filter: false,
      sorter: false,
    },
  ];

  return (
    <CCard className="mb-4">
      <CCardBody className="p-4">
        <CRow>
          <div className={styles.header}>
            <CCardTitle className={styles.headerText}>
              Device Management
            </CCardTitle>
            <CCardSubtitle className="fw-normal text-body-secondary mb-4">
              Total Devices: {initialDevices.length}
            </CCardSubtitle>
          </div>
        </CRow>
        <CCol xs="auto" className="ms-auto">
          <div className={styles.headerButtons}>
            <AppButton className={styles.deleteSelectedBtn}>
              <AppIcon name="cilTrash" className="me-2" />
              {"Delete Selected"}
            </AppButton>
            <AppButton className={styles.exportSelectedBtn}>
              <AppIcon name="cilArrowThickToBottom" className="me-2" />
              {"Export Selected"}
            </AppButton>
            <AppButton className={styles.addDeviceBtn}>
              <AppIcon name="cilPlus" className="me-2" />
              {"Add Device"}
            </AppButton>
          </div>
        </CCol>
        <CSmartTable
          activePage={1}
          columns={columns}
          columnFilter
          columnSorter
          pagination
          noItemsLabel={noItemsLabel}
          items={initialDevices}
          itemsPerPageSelect
          itemsPerPage={itemsPerPage}
          scopedColumns={{
            selections: (item) => {
              return (
                <td className="py-2">
                  <div className={styles.buttons}>
                    <AppButton className={styles.editBtn}>
                      <AppIcon name="cilPencil" size="l" />
                    </AppButton>
                    <AppButton className={styles.deleteBtn}>
                      <AppIcon name="cilTrash" size="l" />
                    </AppButton>
                  </div>
                </td>
              );
            },
          }}
          selectable
          sorterValue={sorterValue}
          tableFilterLabel={""}
          tableProps={{
            responsive: true,
            striped: true,
            hover: true,
            ...rest.tableProps,
          }}
          tableBodyProps={{
            className: "align-middle",
            ...rest.tableBodyProps,
          }}
          onSelectedItemsChange={(items) =>
            setSelectedItems(items.map((item) => item.Id))
          }
          {...rest}
        />
      </CCardBody>
    </CCard>
  );
};

AppSmartTable.propTypes = {
  columns: PropTypes.array,
  devicesData: PropTypes.array,
  deleteDevice: PropTypes.func,
  itemsPerPage: PropTypes.number,
  sorterValue: PropTypes.object,
  noItemsLabel: PropTypes.string,
  tableProps: PropTypes.object,
  tableBodyProps: PropTypes.object,
};
