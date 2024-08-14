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
    <div className="login-container">
      <AppContainer>
        <AppRow className="justify-content-center">
          <AppCol md={5}>
            <AppCard className="p-4">
              <AppCardBody>
                <AppForm>
                  <h1>Login</h1>
                  <p className="text-body-secondary">Sign In to your account</p>
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
                  <AppRow>
                    <AppCol xs={6}>
                      <AppButton color="primary" className="px-4">
                        Login
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
  );
};

export default Login;
