"use client";

import React from "react";
import Link from "next/link";
import "./globals.css";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/">
            <a className="text-white">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/trending">
            <a className="text-white">Trending Terms</a>
          </Link>
        </li>
        <li>
          <Link href="/search">
            <a className="text-white">Search</a>
          </Link>
        </li>
        <li>
          <Link href="/profile">
            <a className="text-white">User Profile</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}