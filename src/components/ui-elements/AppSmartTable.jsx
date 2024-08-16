import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { CSmartTable } from "@coreui/react-pro";

import { AppIcon } from "src/components/ui-elements/index";

import "./AppSmartTable.scss";

export const AppSmartTable = ({
  columns,
  devicesData,
  deleteDevice,
  itemsPerPage = 5,
  sorterValue = { column: "status", state: "asc" },
  tableFilterPlaceholder = "Search device...",
  noItemsLabel = "No devices found",
  ...rest
}) => {
  return (
    <CSmartTable
      activePage={1}
      columns={columns}
      columnFilter
      columnSorter
      pagination
      noItemsLabel={noItemsLabel}
      items={devicesData}
      itemsPerPageSelect
      itemsPerPage={itemsPerPage}
      scopedColumns={{
        selections: (item) => {
          return (
            <td className="py-2">
              <div className="table-buttons">
                <Link className="btn primary btn-sm">
                  <AppIcon
                    name="cilPencil"
                    size="lg"
                    style={{ "--ci-primary-color": "green" }}
                  />
                </Link>
                <button
                  type="button"
                  className="btn primary btn-sm"
                  onClick={() => deleteDevice(item.Id)}
                >
                  <AppIcon
                    className="edit-icon"
                    name="cilTrash"
                    size="lg"
                    style={{ "--ci-primary-color": "red" }}
                  />
                </button>
              </div>
            </td>
          );
        },
      }}
      selectable
      sorterValue={sorterValue}
      tableFilter
      tableFilterPlaceholder={tableFilterPlaceholder}
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
      {...rest}
    />
  );
};

AppSmartTable.propTypes = {
  columns: PropTypes.array.isRequired,
  devicesData: PropTypes.array.isRequired,
  deleteDevice: PropTypes.func.isRequired,
  itemsPerPage: PropTypes.number,
  sorterValue: PropTypes.object,
  tableFilterPlaceholder: PropTypes.string,
  noItemsLabel: PropTypes.string,
  tableProps: PropTypes.object,
  tableBodyProps: PropTypes.object,
};
