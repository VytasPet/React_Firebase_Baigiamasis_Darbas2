import { useFormik } from "formik";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { RegisterButton, RegisterWithGoogle } from "../components/ui/Button";
import { Input } from "../components/ui/Inputs";
import * as Yup from "yup";
import { auth, googleProvider } from "../firebase/firebase";
import toast from "react-hot-toast";
import { media } from "../components/ui/Responsive";

const LoginTitle = styled.h2`
  font-size: 41px;
  margin-bottom: 10px;
  color: white;
  font-weight: 400;
  ${media.tablet`
  font-size: 31px;
  `}
`;
const Links = styled(Link)`
  color: #cccccc;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 50px;
  display: block;
  text-decoration: underline;
`;

const FormName = styled.h2`
  font-size: 51px;
`;
const Description = styled.p`
  font-size: 22px;
  font-weight: 400;
  line-height: 35.2px;
`;
const ErrText = styled.p`
  font-size: 16px;
  color: red;
  margin-bottom: 10px;
`;

const HalfPageForm = styled.form`
  width: 70%;
  display: flex;
  align-items: center;
  flex-direction: column;

  ${media.tablet`
  width: 100%;
  `}
`;
const AllLogins = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

function LoginForm({ onLog }) {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email().min(3).required(),
      password: Yup.string().min(4).required(),
    }),
    onSubmit: (values) => {
      console.log("Form values:", values);
      onLog(values);
    },
  });

  function loginWithGmail() {
    const loginGooglePromise = signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log("result ===", result);
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log("user ===", user);
        navigate("/");
      })
      .catch((error) => {
        // Handle Errors here.
        console.log("error ===", error);
        const errorCode = error.code;
        const errorMessage = error.message;
        console.warn("errorMessage ===", errorMessage);
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    toast.promise(loginGooglePromise, {
      loading: "Loading",
      success: "Login success",
      error: "Error when loging in",
    });
  }

  return (
    <>
      <AllLogins>
        <HalfPageForm onSubmit={formik.handleSubmit}>
          <LoginTitle>Login details:</LoginTitle>
          <Links to={"/register"}>Would you like to register?</Links>
          <Input type="text" name="email" id="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} placeholder="Your email" />
          {formik.errors.email && formik.touched.email && <ErrText>{formik.errors.email}</ErrText>}
          <Input type="password" name="password" id="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} placeholder="Password" />
          {formik.errors.password && formik.touched.password && <ErrText>{formik.errors.password}</ErrText>}
          <RegisterButton type="submit">Login</RegisterButton>
        </HalfPageForm>
        <RegisterWithGoogle onClick={loginWithGmail}>Login with Google</RegisterWithGoogle>
      </AllLogins>
    </>
  );
}

export default LoginForm;
