"use client";

import React from "react";
import Link from "next/link";
import "./globals.css";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="text-white">Home</Link>
        </li>
        <li>
          <Link href="/trending" className="text-white">Trending Terms</Link>
        </li>
        <li>
          <Link href="/search" className="text-white">Search</Link>
        </li>
        <li>
          <Link href="/profile" className="text-white">User Profile</Link>
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