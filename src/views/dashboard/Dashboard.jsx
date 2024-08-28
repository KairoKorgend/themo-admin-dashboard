import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "src/features/auth/authSlice";
import { getStyle } from "@coreui/utils";
import { useTranslation } from "react-i18next";

import { AppCol, AppRow } from "src/components/layout/index";
import {
  AppWidgetStatsF,
  AppCard,
  AppCardBody,
  AppButton,
  AppButtonGroup,
} from "src/components/ui-elements/index";
import { AppLineChart } from "src/components/charts/index";
import { AppIcon } from "src/components/ui-elements/index";

import "./Dashboard.scss";

const Dashboard = () => {
  const { t } = useTranslation();
  const user = useSelector(selectCurrentUser);

  const Welcome = user ? t("welcome_back", { user }) : t("welcome");

  const content = <h3>{Welcome}</h3>;

  const chartData = {
    labels: [
      t("january"),
      t("february"),
      t("march"),
      t("april"),
      t("may"),
      t("june"),
      t("july"),
    ],
    datasets: [
      {
        label: t("total_users"),
        backgroundColor: "transparent",
        borderColor: getStyle("--cui-success"),
        pointHoverBackgroundColor: getStyle("--cui-success"),
        borderWidth: 3,
        data: [70642, 75105, 90763, 105420, 110005, 112000, 117358],
      },
    ],
  };

  return (
    <>
      {content}
      <AppRow>
        <AppCol xs={12} lg={3}>
          <AppWidgetStatsF
            color="success"
            icon={<AppIcon name="cilDevices" height={24} />}
            title={t("devices_online")}
            value="48 651"
          />
        </AppCol>
        <AppCol xs={12} lg={3}>
          <AppWidgetStatsF
            color="secondary"
            icon={<AppIcon name="cilDevices" height={24} />}
            title={t("devices_offline")}
            value="27 487"
          />
        </AppCol>
        <AppCol xs={12} lg={3}>
          <AppWidgetStatsF
            color="info"
            icon={<AppIcon name="cilPeople" height={24} />}
            title={t("total_clients")}
            value="117 358"
          />
        </AppCol>
        <AppCol xs={12} lg={3}>
          <AppWidgetStatsF
            color="danger"
            icon={<AppIcon name="cilBug" height={24} />}
            title={t("total_errors")}
            value="8"
          />
        </AppCol>
      </AppRow>
      <AppCard className="mb-4">
        <AppCardBody>
          <AppRow>
            <AppCol sm={5}>
              <h4 className="card-title mb-0">{t("total_users")}</h4>
              <div className="small text-body-secondary">
                {t("date_range", {
                  start: t("january"),
                  end: t("july"),
                  year: 2024,
                })}
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
                    {t(value.toLowerCase())}
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
