import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import auth from "../../firebase.init";

import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userInfo, setUserInfo] = useState({});
  const [userInfo2, setUserInfo2] = useState({});
  const [user, loading, error] = useAuthState(auth);

  const handleChange = (e) =>
    setUserInfo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, userInfo.email, userInfo.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUserInfo2(user);

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const from = location.state?.from?.pathname || "/";

  if (user?.email || userInfo2?.email) {
    navigate(from, { replace: true });
  }

  return (
    <div className="mb-6">
      <h2 className="text-3xl mt-12 text-center">Hero Courses</h2>
      <div className="logIn xs:w-5/6 md:w-5/6 lg:w-1/3 mx-auto flex flex-col bg-white p-12 mt-12">
        <h2 className="text-center m-2 text-2xl">Login to your account</h2>
        <p className="text-center mb-4">
          Don’t have an account?
          <small>
            <button
              onClick={() => navigate("/signup")}
              className="text-blue-500 mx-4 underline text-base"
            >
              Sign Up Now!
            </button>
          </small>
        </p>

        <SocialLogin />

        <form
          onSubmit={handleSubmit}
          className=" w-full justify-center items-center mt-4"
        >
          <div className="flex flex-col gap-4 justify-start">
            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Enter your Email"
              className="p-3 border-b-2 mb-2 w-full"
              required
            />
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Enter your password"
              className="p-3 border-b-2 mb-2 w-full"
              required
            />

            <button className="flex justify-end m-4 text-blue-400 underline">
              Forgot password?
            </button>

            <input
              onClick={handleSubmit}
              type="submit"
              value="Submit"
              className="bg-blue-400 py-3 flex w-full justify-center mt-4 text-lg hover:bg-blue-500 text-white rounded"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
