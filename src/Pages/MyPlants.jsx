import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import MyPlantCard from "../Components/MyPlantCard";
import Title from "../Components/Title";
import { NavLink } from "react-router";

const MyPlants = () => {
  const { user } = useContext(AuthContext);
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/userPlants/${user.email}`)
        .then((res) => {
          if (res.ok) return res.json();
        })
        .then((data) => setPlants(data))
        .catch(() => {});
    }
  }, [user]);

  const handleDeleteFromList = (id) => {
    setPlants((prevPlants) => prevPlants.filter((plant) => plant._id !== id));
  };

  Title(`My Plants - ${user?.email || "User"}`);

  return (
    <div>
      <h2 className="text-3xl md:text-5xl lg:text-7xl text-center font-bold my-5 permanent-marker-regular text-green-500">
        My Plants
      </h2>
      {plants.length === 0 ? (
        <div className="text-center my-10">
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-500 mb-5">
            You don't have any plants yet. <br /> 🌱 Start adding some to see
            them here!
          </p>
          <NavLink
            to="/Add-Plants"
            className="btn btn-soft btn-success md:text-lg lg:text-xl rounded md:font-extrabold"
          >
            Add a Plant
          </NavLink>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center my-10">
          {plants.map((plant) => (
            <MyPlantCard
              key={plant._id}
              plant={plant}
              onDelete={handleDeleteFromList}
            ></MyPlantCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyPlants;
