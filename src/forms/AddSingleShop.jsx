import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RegisterButton } from "../components/ui/Button";
import { useAuthCtx } from "../store/AuthProvider";
import * as Yup from "yup";
import { media } from "../components/ui/Responsive";

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

  ${media.tablet`
 min-width: 60%;
 align-items: center
  `}
`;

const InputSmall = styled(InputBig)`
  width: 100px;
  min-height: 20px;

  ${media.tablet`
 min-width: 40%;
 align-items: center
  `}
`;

const HalfPageForm = styled.form`
  width: 38%;
  display: flex;
  flex-direction: column;

  ${media.tablet`
 width: 100%;
 align-items: center
  `}
`;

const LoginTitle = styled.h2`
  font-size: 41px;
  margin-bottom: 40px;
  color: white;
  font-weight: 400;
  ${media.tablet`
  text-align: center;
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
const ErrText = styled.p`
  font-size: 16px;
  color: red;
  margin-bottom: 10px;
`;

function AddSingleShop({ addShop }) {
  const { user } = useAuthCtx();
  console.log("user ===", user.uid);
  const formik = useFormik({
    initialValues: {
      shopName: "",
      description: "",
      startYear: "",
      town: "",
      tags: "",
      imageUrl: "",
    },
    validationSchema: Yup.object({
      shopName: Yup.string().min(5).required(),
      description: Yup.string().min(6).required(),
      town: Yup.string().min(5).required(),
      startYear: Yup.number().min(1970).max(2022).required(),
      tags: Yup.string().min(2).required(),
      imageUrl: Yup.string().min(5).required(),
    }),
    onSubmit: (values) => {
      console.log("Form values:", values);
      const shopWithUid = { userUid: user.uid, ...values };
      console.log("shopWithUid ===", shopWithUid);
      addShop(shopWithUid);
    },
  });

  return (
    <HalfPageForm onSubmit={formik.handleSubmit}>
      <LoginTitle>Add New Shop:</LoginTitle>
      <InputSmall type="text" name="shopName" id="shopName" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.shopName} placeholder="Title"></InputSmall>
      {formik.errors.shopName && formik.touched.shopName && <ErrText>{formik.errors.shopName}</ErrText>}
      <InputBig type="text" name="description" id="description" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.description} placeholder="Describe your shop"></InputBig>
      {formik.errors.description && formik.touched.description && <ErrText>{formik.errors.description}</ErrText>}
      <InputSmall type="text" name="town" id="town" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.town} placeholder="Town"></InputSmall>
      {formik.errors.town && formik.touched.town && <ErrText>{formik.errors.town}</ErrText>}
      <InputSmall type="number" name="startYear" id="startYear" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.startYear} placeholder="Start Year"></InputSmall>
      {formik.errors.startYear && formik.touched.startYear && <ErrText>{formik.errors.startYear}</ErrText>}
      <InputSmall type="text" name="tags" id="tags" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.tags} placeholder="Tags"></InputSmall>
      {formik.errors.tags && formik.touched.tags && <ErrText>{formik.errors.tags}</ErrText>}
      <InputSmall type="text" name="imageUrl" id="imageUrl" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.imageUrl} placeholder="Image url"></InputSmall>
      {formik.errors.imageUrl && formik.touched.imageUrl && <ErrText>{formik.errors.imageUrl}</ErrText>}
      <RegisterButton type="submit">Submit</RegisterButton>
    </HalfPageForm>
  );
}

export default AddSingleShop;
