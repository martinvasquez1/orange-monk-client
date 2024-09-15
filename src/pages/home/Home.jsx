import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getUser } from '../../api/users';
import { jwtDecode } from 'jwt-decode';
import UserGroups from './UserGroups';

export default function Home({}) {
  const userId = jwtDecode(localStorage.getItem('jwt')).id;
  const userQuery = useQuery({
    queryKey: ['users', userId],
    queryFn: () => getUser(userId),
  });

  if (userQuery.isLoading) return <p>Loading...</p>;
  if (userQuery.isError) return <p>Error!</p>;

  const user = userQuery.data.data.user;

  return (
    <div className="rounded-2xl bg-base-300">
      <div className="mb-8 mt-4">
        <div className="flex justify-between">
          <div>
            <h1 className="text-3xl font-bold">Welcome {user.username}!</h1>
            <p className="mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
          </div>
          <div className="flex gap-4">
            <Link to="/app/create-group" className="btn">
              Create
            </Link>
            <Link to="/app/search" className="btn btn-primary">
              Search
            </Link>
          </div>
        </div>
      </div>
      <UserGroups userId={userId} />
    </div>
  );
}
