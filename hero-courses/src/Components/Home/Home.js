import React from "react";
import { useNavigate } from "react-router-dom";
import subBanner from "../../assest/hero-right.png";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-screen-2xl px-12 mx-auto mt-16">
      <div className="flex gap-x-8 justify-center items-center">
        <div className="w-full">
          <h2 className="text-7xl font-bold leading-16">
            Build Bright Life? <br /> Take Our Life Course
          </h2>
          <p className="leading-8 mt-6 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur dicta similique, eius possimus, delectus labore eveniet
            quasi
          </p>
          <button
            onClick={() => navigate("/course")}
            className="py-2 px-8 bg-green-600 text-lg rounded mt-6 text-white font-semibold"
          >
            GET YOUR PAID COURSE
          </button>
        </div>
        <img src={subBanner} alt="" />
      </div>
    </div>
  );
};

export default Home;
