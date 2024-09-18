import { useQuery } from '@tanstack/react-query';
import { getUser } from './../api/users';
import { jwtDecode } from 'jwt-decode';

export default function Profile() {
  const userId = jwtDecode(localStorage.getItem('jwt')).id;
  const { data, isLoading, isError } = useQuery({
    queryKey: ['users', userId],
    queryFn: () => getUser(userId),
  });

  if (isLoading) {
    return (
      <div className="rounded-2xl bg-base-100 p-4 shadow">
        <div className="flex items-center gap-4">
          <div className="skeleton h-20 w-20 rounded-full"></div>
          <div className="skeleton h-8 w-36"></div>
        </div>
        <div className="skeleton mt-6 h-6 w-full"></div>
      </div>
    );
  }
  if (isError) return <p>Error!</p>;

  const user = data.data.user;

  return (
    <div className="rounded-2xl bg-base-100 p-4 shadow">
      <div className="flex items-center gap-4">
        <img
          src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1459&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="skeleton h-20 w-20 rounded-full"
        />
        <div className="text-2xl font-bold">{user.username}</div>
      </div>
      <div className="mt-6 rounded-lg text-base-content/70">
        {user.bio || "This user hasn't set a biography yet."}
      </div>
    </div>
  );
}
