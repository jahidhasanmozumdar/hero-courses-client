import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [course, setCourse] = useState({});
  useEffect(() => {
    fetch(`https://hero-server-coral.vercel.app/course/${id}`)
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);

  return (
    <div className="max-w-screen-2xl mx-auto px-12 mt-16 pb-6">
      <div
        key={course.id}
        className="card card-compact  bg-base-100 shadow-xl py-2"
      >
        <figure>
          <img
            className="img-fluid w-[50vh] h-[50vh]"
            src={course.photo}
            alt="Shoes"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{course.name}</h2>
          <p>{course.description}</p>
        </div>
        <div className="">
          <button
            onClick={() => navigate(`/checkout/${course.id}`)}
            className="bg-red-400/60 w-56 flex justify-center mx-auto rounded-md px-6 py-2"
          >
            Get Premium Access
          </button>
          <button className="bg-green-400/60 w-56 flex justify-center mx-auto rounded-md px-6 py-2 mt-4">
            Download here
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
