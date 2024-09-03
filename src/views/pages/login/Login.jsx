import React from "react";
import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCredentials } from "src/features/auth/authSlice";
import { useLoginMutation } from "src/features/auth/authApiSlice";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";

import {
  AppCol,
  AppRow,
  AppForm,
  AppFormInput,
  AppInputGroup,
  AppInputGroupText,
  AppIcon,
  AppButton,
  AppCard,
  AppCardBody,
  AppSpinner,
} from "src/components/index";

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
    document.title = "Themo | Login";
  }, []);

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

  const handleSignUpClick = () => {
    navigate("/register");
  };

  const handleForgotClick = () => {
    navigate("/forgot-password");
  };

  const content = isLoading ? (
    <div className="d-flex justify-content-center">
      <AppSpinner />
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
            placeholder="Email"
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
            <AppButton
              color="primary"
              className={`${styles.loginBtn}`}
              type="submit"
            >
              Login
            </AppButton>
          </AppCol>
        </AppRow>
        <AppCol xs={12}>
          <p className={`${styles.forgotPwdText} text-body-secondary`}>
            Forgot{" "}
            <span className={styles.link} onClick={handleForgotClick}>
              Password?
            </span>
          </p>
        </AppCol>
        <AppCol>
          <p className={`${styles.dontHaveAccText} text-body-secondary`}>
            Don't have an account?{" "}
            <span className={styles.link} onClick={handleSignUpClick}>
              Sign up
            </span>
          </p>
        </AppCol>
      </AppForm>
    </section>
  );

  return (
    <div id={styles.lBg}>
      <div className={styles.loginContainer}>
        <AppCard className={styles.loginCard}>
          <img className={styles.logoImage} alt="Themo Logo" />
          <AppCardBody className={styles.loginForm}>{content}</AppCardBody>
        </AppCard>
      </div>
    </div>
  );
};

export default Login;
