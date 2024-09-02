import React from "react";

const Dashboard = React.lazy(() => import("src/views/dashboard/Dashboard.jsx"));
const Devices = React.lazy(() => import("src/views/devices/Devices.jsx"));
const Account = React.lazy(() => import("src/views/account/AccountPage.jsx"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", element: Dashboard },
  { path: "/devices", name: "Devices", element: Devices },
  { path: "/account", name: "Account", element: Account },
];

export default routes;
