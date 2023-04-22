import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RegisterButton } from "../components/ui/Button";
import { useAuthCtx } from "../store/AuthProvider";

const FormName = styled.h2`
  font-size: 51px;
`;
const Description = styled.p`
  font-size: 22px;
  font-weight: 400;
  line-height: 35.2px;
`;

const InputBig = styled.input`
  font-size: 16px;
  color: #254969;
  min-width: 70%;
  min-height: 40px;
  border-radius: 10px;
  padding: 10px 16px;
  margin-bottom: 10px;
  border: 2px solid #a259ff;
  margin-bottom: 20px;
`;

const InputSmall = styled(InputBig)`
  width: 100px;
  min-height: 20px;
`;

const HalfPageForm = styled.form`
  width: 38%;
  display: flex;
  flex-direction: column;
`;

const LoginTitle = styled.h2`
  font-size: 41px;
  margin-bottom: 40px;
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

function AddSingleShop({ addShop }) {
  const { user } = useAuthCtx();
  console.log("user ===", user.uid);
  const formik = useFormik({
    initialValues: {
      title: "jonas@mekas.com",
      description: "",
      town: "",
      tags: "",
      imageUrl: "",
    },
    onSubmit: (values) => {
      console.log("Form values:", values);
      const shopWithUid = { uid: user.uid, ...values };
      console.log("shopWithUid ===", shopWithUid);
      addShop(shopWithUid);
    },
  });

  return (
    <HalfPageForm onSubmit={formik.handleSubmit}>
      <LoginTitle>Add New Shop:</LoginTitle>
      <InputSmall type="text" name="title" id="title" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.title} placeholder="Title"></InputSmall>
      <InputBig type="text" name="description" id="description" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.description} placeholder="Describe your shop"></InputBig>
      <InputSmall type="text" name="town" id="town" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.town} placeholder="Town"></InputSmall>
      <InputSmall type="text" name="tags" id="tags" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.tags} placeholder="Tags"></InputSmall>
      <InputSmall type="text" name="imageUrl" id="imageUrl" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.imageUrl} placeholder="Image url"></InputSmall>
      <RegisterButton type="submit">Submit</RegisterButton>
    </HalfPageForm>
  );
}

export default AddSingleShop;
