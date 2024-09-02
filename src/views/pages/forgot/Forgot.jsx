import React from "react";
import { useRef, useState, useEffect } from "react";
import useAppColorMode from "src/hooks/useAppColorMode";
import { useNavigate } from "react-router-dom";
import styles from "./Forgot.module.scss";

import {
  AppForm,
  AppFormInput,
  AppInputGroup,
  AppInputGroupText,
  AppButton,
  AppCard,
  AppCardBody,
  AppIcon,
  AppCol,
  AppRow,
} from "src/components/index";

const Login = () => {
  const { colorMode } = useAppColorMode();

  const logoSrc =
    colorMode === "dark"
      ? "src/assets/images/themo_logo_light.png"
      : "src/assets/images/themo_logo_light.png";

  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Themo | Forgot Password";
  }, []);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user]);

  const handleUserInput = (e) => setUser(e.target.value);

  const handleBackTologinClick = () => {
    navigate("/login");
  };

  return (
    <div id={styles.lBg}>
      <div className={styles.forgotPwdContainer}>
        <AppCard className={styles.forgotPwdCard}>
          <img src={logoSrc} alt="Login Avatar" className="mb-2" />
          <AppCardBody>
            <p className={styles.infoText}>
              Enter your email and we'll send you a link to reset your password.
            </p>
            <section className={styles.forgotPwd}>
              <AppForm className={styles.forgotPwdForm}>
                <AppInputGroup className="mb-4">
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
                      className={styles.forgotBtn}
                      type="submit"
                    >
                      Submit
                    </AppButton>
                  </AppCol>
                  <AppCol>
                    <p
                      className={`${styles.backToLoginText} text-body-secondary`}
                    >
                      Back to{" "}
                      <span
                        className={styles.link}
                        onClick={handleBackTologinClick}
                      >
                        login
                      </span>
                    </p>
                  </AppCol>
                </AppRow>
              </AppForm>
            </section>
          </AppCardBody>
        </AppCard>
      </div>
    </div>
  );
};

export default Login;
