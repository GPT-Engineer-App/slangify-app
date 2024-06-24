"use client";

import { useState } from 'react';

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    // Perform search logic here
    setResults([
      { id: 1, term: 'BRB', definition: 'Be Right Back' },
      { id: 2, term: 'IDK', definition: 'I Don’t Know' },
    ]);
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
      <ul className="mt-4">
        {results.map((result) => (
          <li key={result.id} className="mb-2">
            <strong>{result.term}:</strong> {result.definition}
          </li>
        ))}
      </ul>
    </div>
  );
}