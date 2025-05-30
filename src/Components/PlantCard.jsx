import React from "react";
import { NavLink } from "react-router";

const PlantCard = ({ plant }) => {
    const {plantName,category,careLevel,wateringFrequency,url,_id}= plant;
  return (
    <div className="card bg-base-300 w-96 shadow-gray-50 shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1">
      <figure className="w-full h-62 overflow-hidden">
        <img
          src={url}
          alt="Image"
          className="transition duration-300 ease-in-out transform hover:-translate-y-1 object-contain rounded-t-lg"
        />
      </figure>
      <div className="card-body transition duration-300 ease-in-out transform hover:-translate-y-1">
        <h2 className="card-title">{plantName}</h2>
        <div className="badge badge-outline badge-info">Category : {category} </div>
        <div className="badge badge-outline badge-success">Care-Level : {careLevel} </div>
        <div className="badge badge-outline badge-warning h-12">
          Watering Frequency: {wateringFrequency} days
        </div>
        <div className="card-actions justify-end">
          <NavLink
            to={`/Plants-Details/${_id}`}
            className="btn btn-soft btn-success md:text-lg rounded md:font-extrabold w-full"
          >
            View More Details{" "}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
