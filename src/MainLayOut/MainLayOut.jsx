import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Spinner from "../Components/Spinner";

const MainLayOut = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 200); // simulate loading
    return () => clearTimeout(timeout);
  }, [location]);
  return (
    <div>
      {loading && <Spinner></Spinner>}
      <div className="w-[97%] md:w-[95%] lg:w-[70%] mx-auto pt-[120px]">
        <header>
          <Navbar></Navbar>
        </header>
        <main className="min-h-[calc(100vh-90px)]">
          <Outlet></Outlet>
        </main>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayOut;
