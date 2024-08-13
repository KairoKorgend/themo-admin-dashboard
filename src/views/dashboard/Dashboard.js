import React from "react";
import { getStyle } from "@coreui/utils";

import { AppCol, AppRow } from "src/components/layout/index";
import {
  AppCard,
  AppCardBody,
  AppButton,
  AppButtonGroup,
} from "src/components/ui-elements/index";
import { AppLineChart } from "src/components/charts/index";
import WidgetsDropdown from "../widgets/WidgetsDropdown";

const Dashboard = () => {
  const random = () => Math.round(Math.random() * 100);

  const chartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My Second dataset",
        backgroundColor: "transparent",
        borderColor: getStyle("--cui-success"),
        pointHoverBackgroundColor: getStyle("--cui-success"),
        borderWidth: 3,
        data: [
          random(50, 200),
          random(50, 200),
          random(50, 200),
          random(50, 200),
          random(50, 200),
          random(50, 200),
          random(50, 200),
        ],
      },
    ],
  };

  return (
    <>
      <WidgetsDropdown className="mb-4" />
      <AppCard className="mb-4">
        <AppCardBody>
          <AppRow>
            <AppCol sm={5}>
              <h4 className="card-title mb-0">Total Users</h4>
              <div className="small text-body-secondary">
                January - July 2023
              </div>
            </AppCol>
            <AppCol sm={7} className="d-none d-md-block">
              <AppButtonGroup className="float-end me-3">
                {["Day", "Month", "Year"].map((value) => (
                  <AppButton
                    color="outline-secondary"
                    key={value}
                    className="mx-0"
                    active={value === "Month"}
                  >
                    {value}
                  </AppButton>
                ))}
              </AppButtonGroup>
            </AppCol>
          </AppRow>
          <AppLineChart data={chartData} />
        </AppCardBody>
      </AppCard>
    </>
  );
};

export default Dashboard;
