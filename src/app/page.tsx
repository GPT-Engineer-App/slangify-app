"use client";

import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Slang Term App</h1>
      <p className="mb-4">Stay updated with the latest teenage slang terms.</p>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/trending">
              <a className="text-blue-500">Trending Terms</a>
            </Link>
          </li>
          <li>
            <Link href="/search">
              <a className="text-blue-500">Search</a>
            </Link>
          </li>
          <li>
            <Link href="/profile">
              <a className="text-blue-500">User Profile</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;