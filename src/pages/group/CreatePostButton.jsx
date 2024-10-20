import { useQuery } from '@tanstack/react-query';
import { getUser } from './../../api/users';
import { jwtDecode } from 'jwt-decode';
import { Link } from 'react-router-dom';
import UserAvatar from './../../components/UserAvatar';

export default function CreatePostButton() {
  const userId = jwtDecode(localStorage.getItem('jwt')).id;
  const { data, isLoading, isError } = useQuery({
    queryKey: ['users', userId],
    queryFn: () => getUser(userId),
  });

  if (isLoading) return 'Skeleton';
  if (isError) return <p>Error!</p>;

  const user = data.data.user;

  return (
    <>
      <div className="mb-4 flex items-center gap-4 rounded-xl bg-base-100 p-4 shadow">
        <UserAvatar
          url={user.profilePicture}
          username={user.username}
          color={user.placeholderColor}
          hideUsername={true}
        />
        <Link
          to="create-post"
          className="w-full rounded-lg bg-base-200 py-4 pl-4 text-left"
        >
          Create Post
        </Link>
      </div>
    </>
  );
}
