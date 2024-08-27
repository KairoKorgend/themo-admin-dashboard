import React from "react";
import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCredentials } from "src/features/auth/authSlice";
import { useLoginMutation } from "src/features/auth/authApiSlice";
import { useNavigate } from "react-router-dom";
import { CSpinner } from "@coreui/react";
import styles from "./Login.module.scss";

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
  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user && !pwd) {
      setErrMsg("Email and password are required");
      errRef.current.focus();
      return;
    } else if (!user) {
      setErrMsg("Email is required");
      errRef.current.focus();
      return;
    } else if (!pwd) {
      setErrMsg("Password is required");
      errRef.current.focus();
      return;
    }

    try {
      const userData = await login({ user, pwd }).unwrap();
      dispatch(setCredentials({ ...userData, user }));
      setUser("");
      setPwd("");
      navigate("/");
    } catch (err) {
      if (!err?.response) {
        setErrMsg(`Sorry, we couldn't find an account with that username.`);
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  const handleUserInput = (e) => setUser(e.target.value);
  const handlePwdInput = (e) => setPwd(e.target.value);

  const content = isLoading ? (
    <div className="d-flex justify-content-center">
      <CSpinner />
    </div>
  ) : (
    <section className={styles.login}>
      <AppForm className={styles.loginForm} onSubmit={handleSubmit}>
        <AppInputGroup className="mb-3">
          <AppInputGroupText>
            <AppIcon name="cilUser" />
          </AppInputGroupText>
          <AppFormInput
            type="text"
            id="username"
            ref={userRef}
            value={user}
            onChange={handleUserInput}
            placeholder="Username"
            autoComplete="off"
          />
        </AppInputGroup>
        <AppInputGroup className="mb-4">
          <AppInputGroupText>
            <AppIcon name="cilLockLocked" />
          </AppInputGroupText>
          <AppFormInput
            type="password"
            id="password"
            onChange={handlePwdInput}
            value={pwd}
            placeholder="Password"
          />
        </AppInputGroup>
        <p
          ref={errRef}
          className={`${errMsg ? styles.errmsg : styles.offscreen}`}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <AppRow className={styles.centerButton}>
          <AppCol xs={12}>
            <AppButton color="dark" className={styles.loginBtn} type="submit">
              Login
            </AppButton>
          </AppCol>
          <AppCol xs={6} className="text-right">
            <AppButton color="link" className={`${styles.forgotPwBtn} px-0`}>
              Forgot password?
            </AppButton>
            <p className={`${styles.registerText} text-body-secondary`}>
              Don't have an account?
            </p>
            <AppButton color="dark" className={styles.signupBtn}>
              Sign Up
            </AppButton>
          </AppCol>
        </AppRow>
      </AppForm>
    </section>
  );

  return (
    <div id={styles.lBg}>
      <div className={styles.loginContainer}>
        <AppCard className={styles.loginCard}>
          <img
            src="src/assets/images/themo_logo.png"
            alt="Login Avatar"
            className="mb-2"
          />
          <AppCardBody className={styles.loginForm}>{content}</AppCardBody>
        </AppCard>
      </div>
    </div>
  );
};

export default Login;
