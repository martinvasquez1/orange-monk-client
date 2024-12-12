import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getUser } from '../../api/users';
import { jwtDecode } from 'jwt-decode';
import UserGroups from './UserGroups';

export default function Home({}) {
  const userId = jwtDecode(localStorage.getItem('jwt')).id;
  const { data, isLoading, isError } = useQuery({
    queryKey: ['users', userId],
    queryFn: () => getUser(userId),
  });

  if (isError) return 'Error!';

  const currentHour = new Date().getHours();

  let greeting;
  if (currentHour < 12) {
    greeting = "Good Morning! Ready to explore what's new?";
  } else if (currentHour < 18) {
    greeting = 'Great to see you here';
  } else {
    greeting = 'Good Night! Check out what\'s new"';
  }

  return (
    <div className="rounded-2xl">
      <div className="mb-8 mt-4">
        <div className="flex flex-col justify-between md:flex-row">
          {isLoading ? (
            <div>
              <div className="skeleton h-9 w-72"></div>
              <div className="skeleton mt-1 h-6 w-96"></div>
            </div>
          ) : (
            <div>
              <h1 className="text-3xl font-bold">
                Welcome {data.data.user.username}!
              </h1>
              <p className="mt-1">{greeting}</p>
            </div>
          )}
          <div className="flex gap-4 pt-4 md:pt-0">
            <Link to="/app/create-group" className="btn bg-base-300">
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
