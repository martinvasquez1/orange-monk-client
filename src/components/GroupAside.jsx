import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getGroup } from '../api/groups';

function LoadingSkeleton() {
  return (
    <div className="rounded-2xl bg-base-100 p-4 shadow">
      <h3 className="skeleton h-7"></h3>
      <p className="skeleton mt-4 h-6 w-full"></p>
      <p className="skeleton mt-2 h-6 w-4/5"></p>
    </div>
  );
}

export default function GroupAside() {
  const { groupId } = useParams();
  const { isLoading, isError, data } = useQuery({
    queryKey: ['groups', groupId],
    queryFn: () => getGroup(groupId),
  });

  if (isLoading) return <LoadingSkeleton />;
  if (isError) return 'Error!';

  const group = data.data.group;

  return (
    <aside className="flex flex-col gap-4">
      <div className="rounded-box bg-base-100 p-4 shadow">
        {group.sidebar ? (
          <>
            <h3 className="text-lg font-bold">Information</h3>
            <p className="mt-4 text-base-content/70">{group.sidebar}</p>
          </>
        ) : (
          <>
            <h3 className="text-lg font-bold">Welcome!</h3>
            <p className="mt-4 text-base-content/70">
              Ask your administrator to add some interesting text here!
            </p>
          </>
        )}
      </div>
    </aside>
  );
}
