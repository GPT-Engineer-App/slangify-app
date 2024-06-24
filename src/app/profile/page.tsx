"use client";

import { useState } from 'react';

export default function Profile() {
  const [user, setUser] = useState({ name: 'John Doe', email: 'john@example.com' });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">User Profile</h1>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}