"use client";

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white">Home</Link>
        </li>
        <li>
          <Link to="/trending" className="text-white">Trending Terms</Link>
        </li>
        <li>
          <Link to="/search" className="text-white">Search</Link>
        </li>
        <li>
          <Link to="/profile" className="text-white">User Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;