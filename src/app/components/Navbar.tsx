"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <ul className="flex space-x-4 text-white">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/trending">Trending Terms</Link>
          </li>
          <li>
            <Link href="/search">Search</Link>
          </li>
          <li>
            <Link href="/profile">User Profile</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}