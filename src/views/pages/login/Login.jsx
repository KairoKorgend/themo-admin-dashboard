import React from "react";
import "./Login.scss";

import {
  AppForm,
  AppFormInput,
  AppInputGroup,
  AppInputGroupText,
} from "src/components/forms/index";
import { AppCol, AppRow, AppContainer } from "src/components/layout/index";
import { AppCard, AppCardBody } from "src/components/ui-elements/index";
import { AppButton } from "src/components/ui-elements/index";
import { AppIcon } from "src/components/ui-elements/index";

const Login = () => {
  return (
    <div id="l-bg">
      <div className="login-container">
        <AppContainer>
          <AppRow className="justify-content-center">
            <AppCol md={5}>
              <AppCard className="login-card">
                <img
                  src="src/assets/images/themo_logo.png"
                  alt="Login Avatar"
                  className="mb-2"
                />
                <AppCardBody className="login-form">
                  <AppForm className="login-form">
                    <AppInputGroup className="mb-3">
                      <AppInputGroupText>
                        <AppIcon name="cilUser" />
                      </AppInputGroupText>
                      <AppFormInput
                        placeholder="Username"
                        autoComplete="username"
                      />
                    </AppInputGroup>
                    <AppInputGroup className="mb-4">
                      <AppInputGroupText>
                        <AppIcon name="cilLockLocked" />
                      </AppInputGroupText>
                      <AppFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                      />
                    </AppInputGroup>
                    <AppRow className="center-button">
                      <AppCol xs={12}>
                        <AppButton color="dark" className="login-btn">
                          Login
                        </AppButton>
                      </AppCol>
                      <AppCol xs={6} className="text-right">
                        <AppButton color="link" className="forgot-pw-btn px-0">
                          Forgot password?
                        </AppButton>
                        <p className="register-text text-body-secondary">
                          Don't have an account?
                        </p>
                        <AppButton color="dark" className="signup-btn">
                          Sign Up
                        </AppButton>
                      </AppCol>
                    </AppRow>
                  </AppForm>
                </AppCardBody>
              </AppCard>
            </AppCol>
          </AppRow>
        </AppContainer>
      </div>
    </div>
  );
};

export default Login;
