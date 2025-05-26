import React, { useState } from "react";
import { NavLink, useLoaderData } from "react-router";
import Title from "../Components/Title";

const AllPlants = () => {
  const initialPlantsData = useLoaderData();
  const plants = initialPlantsData;
  const [plantsData, setPlantsData] = useState(plants);
  Title("All Plants");

  return (
    <>
      <h1 className="text-3xl md:text-5xl lg:text-7xl text-center font-bold my-5 permanent-marker-regular text-green-500">
        All Plants
      </h1>
      <div className="overflow-x-auto w-[95%] mx-auto">
        <table className="table table-zebra">
          {/* Table head */}
          <thead>
            <tr className="text-green-500 text-base md:text-lg">
              <th>No</th>
              <th>Image, PlantName, Category</th>
              <th>Health-Status</th>
              <th>CareLevel</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {plantsData.map((plants, index) => (
              <tr key={plants._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={plants.url} alt={plants.plantName} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{plants.plantName}</div>
                      <div className="text-sm opacity-50">
                        {plants.category}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="badge badge-info badge-sm h-10 lg:h-fit">
                    {plants.healthStatus}
                  </div>
                </td>
                <td>{plants.careLevel}</td>
                <td>
                  <NavLink to={`/Plants-Details/${plants._id}`} className="btn btn-soft btn-accent btn-sm">Details</NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllPlants;
