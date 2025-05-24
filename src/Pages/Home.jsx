import React from "react";
import Banner from "../Components/Banner";

const Home = () => {
  return (
    <div className="md:flex justify-align-center">
      <div className="md:w-[50%] text-center md:text-left lg:px-15">
        <h1 className="text-5xl lg:text-8xl">Keep your <br /> plants alive</h1>
        <p className="py-7 lg:text-lg">
          Individual care schedule and reminders for your plants, <br className="hidden lg:block" />
          recommendations, step by step guides, identification, light meter <br className="hidden lg:block" /> and
          more. Keep your plants alive with Plant Care !
        </p>
      </div>
      <div className="md:w-[45%]">
        <Banner></Banner>
      </div>
    </div>
  );
};

export default Home;
