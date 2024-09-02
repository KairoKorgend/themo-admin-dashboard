import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { AppContainer, AppSpinner } from "src/components/index";
import routes from "src/routes";

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
