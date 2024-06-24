"use client";

import { useState, useEffect } from 'react';

export default function Trending() {
  const [terms, setTerms] = useState([]);

  useEffect(() => {
    // Fetch trending terms from an API or database
    setTerms([
      { id: 1, term: 'YOLO', definition: 'You Only Live Once' },
      { id: 2, term: 'FOMO', definition: 'Fear Of Missing Out' },
    ]);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Trending Terms</h1>
      <ul>
        {terms.map((term) => (
          <li key={term.id} className="mb-2">
            <strong>{term.term}:</strong> {term.definition}
          </li>
        ))}
      </ul>
    </div>
  );
}