import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";

const MainLayOut = () => {
  return (
    <div>
      <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto">
        <header>
            <Navbar></Navbar>
        </header>
        <main className="min-h-[calc(100vh-90px)]">
          <Outlet></Outlet>
        </main>
      </div>
      <footer></footer>
    </div>
  );
};

export default MainLayOut;
