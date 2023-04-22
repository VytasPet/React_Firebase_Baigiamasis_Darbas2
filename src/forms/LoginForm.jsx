import { useFormik } from "formik";
import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RegisterButton } from "../components/ui/Button";
import { Input } from "../components/ui/Inputs";
import * as Yup from "yup";

const LoginTitle = styled.h2`
  font-size: 41px;
  margin-bottom: 10px;
  color: white;
  font-weight: 400;
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
  width: 38%;
  display: flex;
  align-items: center;

  flex-direction: column;
`;

function LoginForm({ onLog }) {
  const formik = useFormik({
    initialValues: {
      email: "jonas@mekas.com",
      password: "123456",
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

  return (
    <>
      <HalfPageForm onSubmit={formik.handleSubmit}>
        <LoginTitle>Login details:</LoginTitle>
        <Links to={"/register"}>Would you like to register?</Links>
        <Input type="text" name="email" id="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} placeholder="Your email" />
        {formik.errors.email && formik.touched.email && <ErrText>{formik.errors.email}</ErrText>}
        <Input type="password" name="password" id="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} placeholder="Password" />
        {formik.errors.password && formik.touched.password && <ErrText>{formik.errors.password}</ErrText>}
        <RegisterButton type="submit">Login</RegisterButton>
      </HalfPageForm>
      <div>
        <p>{formik.values.email}</p>
        <p>{formik.values.password}</p>
      </div>
    </>
  );
}

export default LoginForm;
