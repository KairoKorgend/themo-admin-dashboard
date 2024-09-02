import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import RequireAuth from "./features/auth/RequireAuth";
import { AppSpinner } from "./components/index";
import "./scss/style.scss";

const AppLayout = React.lazy(() => import("./layout/AppLayout.jsx"));
const Login = React.lazy(() => import("./views/pages/login/Login.jsx"));
const Register = React.lazy(
  () => import("./views/pages/register/Register.jsx")
);
const Terms = React.lazy(() => import("./views/pages/terms/Terms.jsx"));
const Forgot = React.lazy(() => import("./views/pages/forgot/Forgot.jsx"));
const Page404 = React.lazy(() => import("./views/pages/page404/Page404.js"));
const Page500 = React.lazy(() => import("./views/pages/page500/Page500.js"));

const App = () => {
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
          <Route
            exact
            path="/register"
            name="Register Page"
            element={<Register />}
          />
          <Route
            exact
            path="/forgot-password"
            name="Forgot Page"
            element={<Forgot />}
          />
          <Route exact path="/terms" name="Terms Page" element={<Terms />} />
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
