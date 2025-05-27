import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

const PlantCardContainer = ({ plants }) => {
  const [displayPlants, setDisplayPlants] = useState([]);
  const [viewAll, setViewAll] = useState(false);
  useEffect(() => {
    if (viewAll) {
      setDisplayPlants(plants);
    } else {
      setDisplayPlants(plants.slice(0, 6));
    }
  }, [plants, viewAll]);
  return (
    <div>
      <h1 className="text-3xl md:text-5xl lg:text-7xl text-center font-bold my-5 permanent-marker-regular text-green-500">
        Explore Plants
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center my-10">
        {displayPlants.map((plant) => (
          <PlantCard key={plant._id} plant={plant}></PlantCard>
        ))}
      </div>
      <div className="flex justify-center my-20">
        <button
          onClick={() => {
            setViewAll(!viewAll);
            if (viewAll) window.scrollTo(0, 550);
          }}
          className="btn bg-green-500 text-white hover:text-green-500 hover:bg-white hover:border-green-500  lg:text-xl font-bold rounded-4xl"
        >
          {viewAll ? "Show Less Plants" : "Show All Plants"}
        </button>
      </div>
    </div>
  );
};

export default PlantCardContainer;
