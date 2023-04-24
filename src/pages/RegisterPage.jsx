import React from "react";
import { useEffect } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import RegisterForm from "../forms/RegisterForm";

function RegisterPage() {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
  function registrationFireBaseHook({ email, password }) {
    const loadingToastId = toast.loading("Registering...");
    createUserWithEmailAndPassword(email, password).then(() => {
      toast.dismiss(loadingToastId);
      navigate("/shops");
      toast.success("Sign up successfully!");
    });
  }

  useEffect(() => {
    error && toast.error(`Failed to register! ${error}`);
  }, [error]);

  return (
    <div>
      <RegisterForm onReg={registrationFireBaseHook} />
    </div>
  );
}

export default RegisterPage;
