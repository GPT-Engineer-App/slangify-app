"use client";

import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Slang Term App</h1>
      <p className="mb-4">Stay updated with the latest teenage slang terms.</p>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/trending" className="text-blue-500">Trending Terms</Link>
          </li>
          <li>
            <Link to="/search" className="text-blue-500">Search</Link>
          </li>
          <li>
            <Link to="/profile" className="text-blue-500">User Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Index;