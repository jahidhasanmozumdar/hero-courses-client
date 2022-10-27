import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Checkout = () => {
  const { checkId } = useParams();
  const [check, setCheck] = useState();
  useEffect(() => {
    fetch(`http://localhost:5000/course/${checkId}`)
      .then((res) => res.json())
      .then((data) => setCheck(data));
  }, []);
  return (
    <div className="max-w-screen-2xl px-12 mx-auto mt-16">
      <div className="flex flex-col justify-center items-center h-full">
        <h2>Course ID: {check?._id}</h2>
        <h2>Course Name: {check?.name}</h2>

        <button className="border-b border-red-300/70 ">
          Download for more details
        </button>
      </div>
    </div>
  );
};

export default Checkout;
