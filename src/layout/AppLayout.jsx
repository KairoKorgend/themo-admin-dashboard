import React from "react";
import { AppSidebar, AppHeader, AppContent } from "src/components/index";

const DefaultLayout = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader />
        <div className="body flex-grow-1">
          <AppContent />
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
