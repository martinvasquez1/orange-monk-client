import React, { useEffect, useState } from 'react';

export default function Home({}) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchusers = async () => {
      try {
        const token = localStorage.getItem('jwt');
        const response = await fetch(import.meta.env.VITE_API_URL + 'users', {
          method: 'GET',
          headers: {
            'x-access-token': token,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data.data.data);
        setLoading(false);
      } catch (err) {
        setError(err.message || 'An error occurred while fetching users');
        setLoading(false);
      }
    };

    fetchusers();
  }, []);

  return (
    <div>
      <div>Home</div>
      {users.map((user) => (
        <li key={user._id}>
          - {user.username} {user.email}
        </li>
      ))}
    </div>
  );
}
