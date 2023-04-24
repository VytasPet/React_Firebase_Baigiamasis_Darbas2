import { addDoc, collection } from "firebase/firestore";
import { useFormik } from "formik";
import React from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { RegisterButton } from "../components/ui/Button";
import { media } from "../components/ui/Responsive";
import { db } from "../firebase/firebase";
import AddSingleShop from "../forms/AddSingleShop";

const MainDiv = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  max-wight: 100%;
  display: flex;
  justify-content: space-between;
`;

const LoginPic = styled.img`
  opacity: 0.5;
  display: block;
  max-width: 50%;
  max-height: 60vh;
  border-radius: 25px;

  ${media.tablet`
display:none;
  `}
`;

function AddNewShop() {
  const navigate = useNavigate();

  function addNewShop(newShop) {
    console.log("newShop ===", newShop);
    const shopRef = collection(db, "shops");
    addDoc(shopRef, newShop).then(() => {
      console.log("prideta!");
      toast.success("You added new shop!");
      navigate("/shops");
    });
    // console.log('Document written with ID: ', docRef.id);
    // navigate('/posts');
  }
  return (
    <MainDiv className="container">
      {/* <h1>Welcome to Login Page</h1> */}
      <LoginPic src="src/assets/img/addShop.jpg" alt="" />
      <AddSingleShop addShop={addNewShop} />
    </MainDiv>
  );
}

export default AddNewShop;
