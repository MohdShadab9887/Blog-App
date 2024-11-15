import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-blue-500 h-12 flex items-center justify-evenly text-white text-xl font-bold font-sans">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "px-4 bg-white text-gray-600 p-[3px] rounded-xl items-center" : "")}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "px-4 bg-white text-gray-600 p-[3px] rounded-xl items-center" : "")}
        to="/blog"
      >
        Blog
      </NavLink>
    </div>
  );
}

export default Navbar;
