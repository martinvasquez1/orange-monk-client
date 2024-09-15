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
    <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
      {data.data.groups.map((group) => {
        return (
          <Link
            to={`/app/group/${group._id}`}
            className="flex items-center gap-4 rounded-xl bg-base-100 p-4 shadow"
            key={group._id}
          >
            <img
              src="https://images.unsplash.com/photo-1599272771314-f3ec16bda3f2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Profile picture."
              className="aspect-square h-20 w-20 rounded-full object-cover"
            />
            <div className="flex-1">
              <h2 className="line-clamp-1 text-lg">{group.name}</h2>
              <p className="mt-1 line-clamp-2 text-sm text-base-content/70">
                {group.description}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
