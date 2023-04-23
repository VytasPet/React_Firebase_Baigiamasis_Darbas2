import React from "react";
import { useEffect } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Startas } from "../components/ui/StartDiv";
import { auth } from "../firebase/firebase";
import RegisterForm from "../forms/RegisterForm";
import { useAuthCtx } from "../store/AuthProvider";

function RegisterPage() {
  const { isLoggedIn } = useAuthCtx();
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
  function registrationFireBaseHook({ email, password }) {
    console.log("email ===", email, password);
    const loadingToastId = toast.loading("Registering...");
    createUserWithEmailAndPassword(email, password).then(() => {
      toast.dismiss(loadingToastId);
      navigate("/shops");
      toast.success("Sign up successfully!");
      // if (user) {
      //   toast.success("Signed in successfully!");

      //   // Navigate to another page or perform any other action upon successful sign-in.
      // } else if (error) {
      //   toast.error(`Failed to sign in: ${error.message}`);
      // }
    });
  }

  // console.log("error ===", error);

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
