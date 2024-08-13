import React from "react";
import { CFooter } from "@coreui/react";

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div>
        <a href="https://themo.io" target="_blank" rel="noopener noreferrer">
          Themo
        </a>
        <span className="ms-1">&copy; 2024.</span>
      </div>
    </CFooter>
  );
};

export default React.memo(AppFooter);
