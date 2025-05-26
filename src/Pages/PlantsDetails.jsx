import React from "react";
import { Link, useLoaderData } from "react-router";
import Title from "../Components/Title";

const PlantsDetails = () => {
  const {
    plantName,
    category,
    careLevel,
    wateringFrequency,
    url,
    lastWateredDate,
    nextWateringDate,
    healthStatus,
    description,
  } = useLoaderData();
  Title(`${plantName} Details`);
  return (
    <>
      <div className="md:w-[75%] lg:w-[65%]  mx-auto my-5">
        <h1 className="text-3xl md:text-5xl lg:text-7xl text-center font-bold my-5 permanent-marker-regular text-green-500">
          {plantName} Details
        </h1>
        <div className="card bg-base-300 shadow-gray-50 shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 p-5">
          <div className=" lg:flex items-center justify-center">
            <figure>
              <img
                src={url}
                alt={plantName}
                className="h-70 object-contain rounded-lg"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{plantName}</h2>
              <p>
                <strong>Category :</strong> {category}
              </p>
              <p>
                <strong>Care Level :</strong> {careLevel}
              </p>
              <p>
                <strong>Watering Frequency :</strong> {wateringFrequency} days
              </p>
              <p>
                <strong>Last Watered Date :</strong> {lastWateredDate}
              </p>
              <p>
                <strong>Next Watering Date :</strong> {nextWateringDate}
              </p>
              <p>
                <strong>Health Status :</strong> {healthStatus}
              </p>
            </div>
          </div>
          <p className=" mt-4">
            <strong className="text-xl text-red-500">
              Description : <br />
            </strong>{" "}
            {description}
          </p>
        </div>
      </div>
      <div className="flex justify-center my-20">
        <Link
          to="/"
          className="btn bg-green-500 text-white hover:text-green-500 hover:bg-white hover:border-green-500 lg:text-xl font-bold rounded-4xl p-7"
        >
          Go Back Home
        </Link>
      </div>
    </>
  );
};

export default PlantsDetails;
