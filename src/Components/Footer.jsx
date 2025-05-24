import React from "react";
import { NavLink } from "react-router";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookSquare,FaInstagram , FaYoutube  } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-black text-gray-200 p-10 mt-5">
        <NavLink
          to="/"
          className="text-xl cursor-pointer flex items-center gap-3"
        >
          <img className="w-8 md:w-10" src="https://i.ibb.co/XfMbvWqY/Green-leaves-logo-2-removebg-preview.png" alt="Image" />
          <span className="tagesschrift-regular font-bold md:text-3xl">Plant Care</span>
        </NavLink>
        <nav className="grid grid-flow-col gap-4 pl-12 md:pl-0">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                isActive
                  ? "text-green-500 underline underline-offset-1 text-xl font-bold"
                  : "text-xl font-bold"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/All-Plants"
                className={({ isActive }) =>
                isActive
                  ? "text-green-500 underline underline-offset-1 text-xl font-bold"
                  : "text-xl font-bold"
                }
              >
                {" "}
                All-Plants
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Add-Plants"
                className={({ isActive }) =>
                isActive
                  ? "text-green-500 underline underline-offset-1 text-xl font-bold"
                  : "text-xl font-bold"
                }
              >
               Add-Plants
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/My-Plants"
                className={({ isActive }) =>
                isActive
                  ? "text-green-500 underline underline-offset-1 text-xl font-bold"
                  : "text-xl font-bold"
                }
              >
                My-Plants
              </NavLink>
            </li>
          </ul>
        </nav>
        <hr className="border-dashed border-white w-[95%]" />
        <nav>
          <div className="grid grid-flow-col gap-4">
            <NavLink
              to="https://www.linkedin.com/in/pranto-kumar-/"
              target="_blank"
            >
              <CiLinkedin size="50px" />
            </NavLink>
            <NavLink
              to="https://www.facebook.com/skpranto.skpranto.71"
              className="pt-0.5"
              target="_blank"
            >
              <FaFacebookSquare size="45px" />
            </NavLink>
            <NavLink
              to="https://www.instagram.com/s_pranto_kumar/"
              target="_blank"
            >
              <FaInstagram size="48px" />
            </NavLink>
            <NavLink
              to="https://www.youtube.com/@Pranto_Kumar_2.0"
              target="_blank"
            >
              <FaYoutube size="50px" />
            </NavLink>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Plant Care <br />
            Pranto Kumar - jr.developer
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;