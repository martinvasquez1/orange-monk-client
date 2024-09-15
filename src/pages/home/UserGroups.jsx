import { Link } from 'react-router-dom';
import { getUserGroups } from '../../api/users';
import { useQuery } from '@tanstack/react-query';

export default function UserGroups({ userId }) {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['users', userId, 'groups'],
    queryFn: () => getUserGroups(userId),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error!</div>;

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
      {data.data.groups.map((group) => {
        return (
          <Link
            to="/app/group/123"
            className="rounded-xl bg-base-100 p-4 shadow"
            key={group._id}
          >
            <h2 className="text-lg">{group.name}</h2>
            <p className="mt-1 text-sm text-base-content/70">
              {group.description}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
