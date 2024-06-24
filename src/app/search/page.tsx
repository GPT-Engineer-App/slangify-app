"use client";

import React, { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    // Implement search functionality here
    console.log("Searching for:", query);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Search Slang Terms</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 mb-4 w-full"
        placeholder="Enter slang term"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white p-2">
        Search
      </button>
    </div>
  );
};

export default Search;