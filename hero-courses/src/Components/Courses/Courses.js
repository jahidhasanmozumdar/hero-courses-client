import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const navigate = useNavigate();
  const [course, setCourse] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/course")
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);

  return (
    <div className="max-w-screen-2xl px-12 mx-auto mt-16">
      <div className="lg:grid grid-cols-4 flex flex-col gap-x-8">
        <div className="bg-gray-100/70 flex flex-col">
          {course.map((c) => (
            <div key={c._id} className="">
              <h2
                onClick={() => navigate(`/course/${c._id}`)}
                className="card-title hover:bg-gray-200/70 border-b px-12 py-4 cursor-pointer"
              >
                {c.name}
              </h2>
            </div>
          ))}
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 col-span-3 mt-4">
          {course.map((c) => (
            <div
              key={c._id}
              className="card card-compact  bg-base-100 shadow-xl"
            >
              <figure>
                <img
                  className="img-fluid h-[200px] w-full"
                  src={c.photo}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{c.name}</h2>
                <p>{c.description.slice(0, 150) + "..."}</p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => navigate(`/course/${c._id}`)}
                    className="btn btn-primary"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
