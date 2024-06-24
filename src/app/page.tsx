"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Slang Term App</h1>
      <p className="mb-4">Stay updated with the latest teenage slang terms.</p>
      <nav>
        <ul className="flex space-x-4">
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
      </nav>
    </div>
  );
}