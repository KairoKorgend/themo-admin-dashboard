import React from "react";
import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCredentials } from "src/features/auth/authSlice";
import { useLoginMutation } from "src/features/auth/authApiSlice";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.scss";

import { AppButton } from "src/components/ui-elements/index";
import { AppIcon } from "src/components/ui-elements/index";
import {
  AppForm,
  AppFormInput,
  AppInputGroup,
  AppInputGroupText,
} from "src/components/forms/index";
import { AppCol, AppRow } from "src/components/layout/index";
import {
  AppCard,
  AppCardBody,
  AppSpinner,
} from "src/components/ui-elements/index";

const Register = () => {
  const userRef = useRef(null);
  const errRef = useRef(null);
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (userRef.current) {
      userRef.current.focus();
    }
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, email, pwd, confirmPwd, phone, firstName, lastName, termsAccepted]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !user.trim() ||
      !email.trim() ||
      !pwd.trim() ||
      !confirmPwd.trim() ||
      !phone.trim() ||
      !firstName.trim() ||
      !lastName.trim()
    ) {
      setErrMsg("All fields are required");
      if (errRef.current) {
        errRef.current.focus();
      }
      return;
    } else if (pwd !== confirmPwd) {
      setErrMsg("Passwords do not match");
      if (errRef.current) {
        errRef.current.focus();
      }
      return;
    } else if (!termsAccepted) {
      setErrMsg("You must accept the terms and conditions");
      if (errRef.current) {
        errRef.current.focus();
      }
      return;
    }

    try {
      const userData = await login({ user, pwd }).unwrap();
      dispatch(setCredentials({ ...userData, user }));
      setUser("");
      setEmail("");
      setPwd("");
      setConfirmPwd("");
      setPhone("");
      setFirstName("");
      setLastName("");
      setTermsAccepted(false);
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
      if (errRef.current) {
        errRef.current.focus();
      }
    }
  };

  const handleEmailInput = (e) => setEmail(e.target.value);
  const handlePwdInput = (e) => setPwd(e.target.value);
  const handleConfirmPwdInput = (e) => setConfirmPwd(e.target.value);
  const handlePhoneInput = (e) => setPhone(e.target.value);
  const handleFirstNameInput = (e) => setFirstName(e.target.value);
  const handleLastNameInput = (e) => setLastName(e.target.value);
  const handleTermsAccepted = (e) => setTermsAccepted(e.target.checked);

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
            id="firstName"
            value={firstName}
            onChange={handleFirstNameInput}
            placeholder="First name"
            autoComplete="off"
            ref={userRef}
          />
        </AppInputGroup>
        <AppInputGroup className="mb-3">
          <AppInputGroupText>
            <AppIcon name="cilUser" />
          </AppInputGroupText>
          <AppFormInput
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleLastNameInput}
            placeholder="Last name"
            autoComplete="off"
          />
        </AppInputGroup>
        <AppInputGroup className="mb-3">
          <AppInputGroupText>
            <AppIcon name="cilEnvelopeClosed" />
          </AppInputGroupText>
          <AppFormInput
            type="email"
            id="email"
            value={email}
            onChange={handleEmailInput}
            placeholder="Email"
            autoComplete="off"
          />
        </AppInputGroup>
        <AppInputGroup className="mb-3">
          <AppInputGroupText>
            <AppIcon name="cilPhone" />
          </AppInputGroupText>
          <AppFormInput
            type="text"
            id="phone"
            value={phone}
            onChange={handlePhoneInput}
            placeholder="Phone"
            autoComplete="off"
          />
        </AppInputGroup>
        <AppInputGroup className="mb-3">
          <AppInputGroupText>
            <AppIcon name="cilLockLocked" />
          </AppInputGroupText>
          <AppFormInput
            type="password"
            id="password"
            value={pwd}
            onChange={handlePwdInput}
            placeholder="Password"
            autoComplete="off"
          />
        </AppInputGroup>
        <AppInputGroup className="mb-3">
          <AppInputGroupText>
            <AppIcon name="cilLockLocked" />
          </AppInputGroupText>
          <AppFormInput
            type="password"
            id="confirmPassword"
            value={confirmPwd}
            onChange={handleConfirmPwdInput}
            placeholder="Confirm password"
            autoComplete="off"
          />
        </AppInputGroup>
        <div className="mb-3">
          <input
            type="checkbox"
            id="terms"
            checked={termsAccepted}
            onChange={handleTermsAccepted}
          />
          <label htmlFor="terms" className="ms-2">
            I accept the terms and conditions
          </label>
        </div>
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
              Sign Up
            </AppButton>
          </AppCol>
          <AppCol xs={6} className="text-right">
            <p className={`${styles.registerText} text-body-secondary`}>
              Already have an account?
            </p>
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

export default Register;
