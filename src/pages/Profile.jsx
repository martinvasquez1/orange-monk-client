import { useQuery } from '@tanstack/react-query';
import { getUser } from './../api/users';
import { jwtDecode } from 'jwt-decode';

import UserAvatar from './../components/UserAvatar';

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
      <UserAvatar
        url={user.profilePicture}
        username={user.username}
        color={user.placeholderColor}
        size="xl"
      />
      <div className="mt-6 rounded-lg text-base-content/70">
        {user.bio || "This user hasn't set a biography yet."}
      </div>
    </div>
  );
}
