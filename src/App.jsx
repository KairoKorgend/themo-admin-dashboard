import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import RequireAuth from "./features/auth/RequireAuth";

import { useColorModes } from "@coreui/react";
import AppSpinner from "./components/ui-elements/AppSpinner.jsx";
import "./scss/style.scss";

const AppLayout = React.lazy(() => import("./layout/AppLayout.jsx"));

// Pages
const Login = React.lazy(() => import("./views/pages/login/Login.jsx"));
const Register = React.lazy(() => import("./views/pages/register/Register.jsx"));
const Page404 = React.lazy(() => import("./views/pages/page404/Page404.js"));
const Page500 = React.lazy(() => import("./views/pages/page500/Page500.js"));

const App = () => {
  const { isColorModeSet, setColorMode } = useColorModes(
    "coreui-free-react-admin-template-theme"
  );
  const storedTheme = useSelector((state) => state.ui.theme);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const theme = urlParams.get("theme");

    if (theme) {
      setColorMode(theme);
    } else if (!isColorModeSet()) {
      setColorMode(storedTheme);
    }
  }, [storedTheme, setColorMode, isColorModeSet]);

  return (
    <Router>
      <Suspense
        fallback={
          <div className="pt-3 text-center">
            <AppSpinner />
          </div>
        }
      >
        <Routes>
          <Route exact path="/login" name="Login Page" element={<Login />} />
          <Route exact path="/register" name="Register Page" element={<Register />} />
          <Route exact path="/404" name="Page 404" element={<Page404 />} />
          <Route exact path="/500" name="Page 500" element={<Page500 />} />
          <Route element={<RequireAuth />}>
            <Route path="*" name="Home" element={<AppLayout />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
