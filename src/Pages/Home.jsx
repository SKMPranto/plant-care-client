import React, {  useState } from "react";
import Banner from "../Components/Banner";
import Title from "../Components/Title";
import PlantCardContainer from "../Components/PlantCardContainer";
import { useLoaderData } from "react-router";
import OurFeatures from "../Components/OurFeatures";

const Home = () => {
  
  const initialPlants = useLoaderData();
  const [plants, setPlants] = useState(initialPlants);

  // Set the title of the page
  Title("Home");
  return (
    <>
    {/* Banner Part */}
      <div className="md:flex justify-align-center">
        <div className="md:w-[50%] text-center md:text-left lg:px-15 md:pt-15 lg:pt-10">
          <h1 className="text-5xl lg:text-8xl">
            Keep your <br /> plants alive
          </h1>
          <p className="py-7 lg:text-lg">
            Individual care schedule and reminders for your plants,{" "}
            <br className="hidden lg:block" />
            recommendations, step by step guides, identification, light meter{" "}
            <br className="hidden lg:block" /> and more. Keep your plants alive
            with Plant Care !
          </p>
        </div>
        <div className="md:w-[45%]">
          <Banner></Banner>
        </div>
      </div>

      {/* Plant Card Container */}
      <section className="Plants-Container my-10 lg:my-20">
          <PlantCardContainer plants={plants}></PlantCardContainer>
      </section>
      {/* Features Section */}
      <section>
        <OurFeatures></OurFeatures>
      </section>

      
    </>
  );
};

export default Home;
