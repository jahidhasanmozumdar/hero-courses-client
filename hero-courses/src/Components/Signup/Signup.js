import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from "../../firebase.init";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

const Signup = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  const handleChange = (e) =>
    setUserInfo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  console.log(userInfo);

  const handleSignup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user) {
          navigate("/");
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
        // ..
      });
  };

  return (
    // <div className="max-w-screen-2xl px-12 mx-auto mt-16">
    //   <h2 className="text-center">SignUp here!</h2>
    //   <form
    //     onSubmit={handleSignup}
    //     className=" w-full justify-center items-center mt-4"
    //   >
    //     {/* <div className="flex flex-col gap-4  justify-center items-center w-full">
    //       <h2 className="">Email : </h2>
    //       <h2>Password : </h2>
    //       <h2>Confirm Password : </h2>
    //     </div> */}

    //     <div className="flex flex-col gap-4 justify-start">
    //       <input
    //         onChange={handleChange}
    //         type="email"
    //         name="email"
    //         placeholder="Enter your Email"
    //         className="border  p-2 rounded-lg w-full"
    //         required
    //       />
    //       <input
    //         onChange={handleChange}
    //         type="password"
    //         name="password"
    //         placeholder="Enter your password"
    //         className="border  p-2 rounded-lg w-full"
    //         required
    //       />
    //       <input
    //         onChange={handleChange}
    //         type="password"
    //         name="ConfirmPassword"
    //         placeholder="Enter your confirm password"
    //         className="border  p-2 rounded-lg"
    //         required
    //       />

    //       <p>
    //         Already have an account?{" "}
    //         <Link to="/login" className="text-orange-500">
    //           login
    //         </Link>{" "}
    //       </p>

    //       <input
    //         onClick={handleSignup}
    //         type="submit"
    //         value="Submit"
    //         className="cursor-pointer btn-xs btn-primary w-32 flex justify-center mx-auto"
    //       />
    //     </div>
    //   </form>
    // </div>

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
          onSubmit={handleSignup}
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
            <input
              onChange={handleChange}
              type="password"
              name="Cpassword"
              placeholder="Enter your Confirm password"
              className="p-3 border-b-2 mb-2 w-full"
              required
            />

            <button className="flex justify-end m-4 text-blue-400 underline">
              Forgot password?
            </button>

            <input
              onClick={handleSignup}
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

export default Signup;
