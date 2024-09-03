import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  CSmartTable,
  CCard,
  CCardBody,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CButton,
} from "@coreui/react-pro";
import { AppIcon, AppButton, CustomSearchInput } from "src/components/index";
import "./styles/AppSmartTable.scss";

const AppSmartTable = ({
  itemsPerPage = 5,
  sorterValue = { column: "status", state: "asc" },
  noItemsLabel = "No devices found. Please add a new device",
  ...rest
}) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [devices, setDevices] = useState([
    {
      Id: 1,
      name: "Device 1",
      info: "Info 1",
      client: "Client 1",
      type: "Type 1",
      power: "100W",
      timeStamp: "2023-10-01T10:00:00Z",
    },
    {
      Id: 2,
      name: "Device 2",
      info: "Info 2",
      client: "Client 2",
      type: "Type 2",
      power: "200W",
      timeStamp: "2023-10-02T11:00:00Z",
    },
    {
      Id: 3,
      name: "Device 3",
      info: "Info 3",
      client: "Client 3",
      type: "Type 3",
      power: "300W",
      timeStamp: "2023-10-03T12:00:00Z",
    },
    {
      Id: 4,
      name: "Device 4",
      info: "Info 4",
      client: "Client 4",
      type: "Type 4",
      power: "400W",
      timeStamp: "2023-10-04T13:00:00Z",
    },
    {
      Id: 1,
      name: "Device 1",
      info: "Info 1",
      client: "Client 1",
      type: "Type 1",
      power: "100W",
      timeStamp: "2023-10-01T10:00:00Z",
    },
    {
      Id: 2,
      name: "Device 2",
      info: "Info 2",
      client: "Client 2",
      type: "Type 2",
      power: "200W",
      timeStamp: "2023-10-02T11:00:00Z",
    },
    {
      Id: 3,
      name: "Device 3",
      info: "Info 3",
      client: "Client 3",
      type: "Type 3",
      power: "300W",
      timeStamp: "2023-10-03T12:00:00Z",
    },
    {
      Id: 4,
      name: "Device 4",
      info: "Info 4",
      client: "Kairo",
      type: "Type 4",
      power: "400W",
      timeStamp: "2023-10-04T13:00:00Z",
    },
  ]);

  const filteredDevices = devices.filter((device) =>
    ["name", "info", "client", "type", "power", "timeStamp"].some((key) =>
      device[key].toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const columns = [
    {
      key: "name",
      _style: { width: "16,6%" },
    },
    {
      key: "info",
      _style: { width: "16,6%" },
    },
    {
      key: "client",
      _style: { width: "16,6%" },
    },
    {
      key: "type",
      _style: { width: "16,6%" },
    },
    {
      key: "power",
      _style: { width: "16,6%" },
    },
    {
      key: "timeStamp",
      _style: { width: "16,6%" },
    },
    {
      key: "selections",
      label: "Actions",
      _style: { width: "1%" },
      filter: false,
      sorter: false,
    },
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const [deviceToDelete, setDeviceToDelete] = useState(null);

  const deleteDevice = (id) => {
    setDevices((prevDevices) =>
      prevDevices.filter((device) => device.Id !== id)
    );
  };

  const deleteSelectedDevices = () => {
    setDevices((prevDevices) =>
      prevDevices.filter((device) => !selectedItems.includes(device.Id))
    );
    setSelectedItems([]);
  };

  const confirmDelete = (id) => {
    setDeviceToDelete(id);
    setModalVisible(true);
  };

  const handleConfirmDelete = () => {
    deleteDevice(deviceToDelete);
    setModalVisible(false);
    setDeviceToDelete(null);
  };

  return (
    <CCard className="mb-4">
      <CCardBody className="p-4">
        <div className="table-header">
          <CustomSearchInput
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <AppButton
            className="delete-btn"
            onClick={deleteSelectedDevices}
            color="danger"
          >
            <AppIcon name="cilTrash" className="me-2" />
            {`Delete (${selectedItems.length})`}
          </AppButton>
        </div>
        <CSmartTable
          activePage={1}
          columns={columns}
          columnSorter
          pagination
          noItemsLabel={noItemsLabel}
          items={filteredDevices}
          itemsPerPageSelect
          itemsPerPage={itemsPerPage}
          scopedColumns={{
            selections: (item) => {
              return (
                <td className="py-2">
                  <div className="buttons">
                    <AppButton className="edit-btn">
                      <AppIcon name="cilPencil" />
                    </AppButton>
                    <AppButton
                      className="select-btn"
                      onClick={() => confirmDelete(item.Id)}
                    >
                      <AppIcon name="cilOptions" />
                    </AppButton>
                  </div>
                </td>
              );
            },
          }}
          selectable
          sorterValue={sorterValue}
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
      <CModal visible={modalVisible} onClose={() => setModalVisible(false)}>
        <CModalHeader>
          <CModalTitle>Confirm Deletion</CModalTitle>
        </CModalHeader>
        <CModalBody>Are you sure you want to delete this device?</CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setModalVisible(false)}>
            Cancel
          </CButton>
          <CButton color="danger" onClick={handleConfirmDelete}>
            Delete
          </CButton>
        </CModalFooter>
      </CModal>
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

export default AppSmartTable;
