import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { AppSpinner } from "src/components/ui-elements/index";
import { AppContainer } from "src/components/layout/index";

const Dashboard = React.lazy(() => import("src/views/dashboard/Dashboard.jsx"));
const Devices = React.lazy(() => import("src/views/devices/Devices.jsx"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", element: Dashboard },
  { path: "/devices", name: "Devices", element: Devices },
];

const AppContent = () => {
  return (
    <AppContainer>
      <Suspense fallback={<AppSpinner />}>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            );
          })}
          <Route path="/" element={<Navigate to="dashboard" replace />} />
        </Routes>
      </Suspense>
    </AppContainer>
  );
};

export default React.memo(AppContent);
