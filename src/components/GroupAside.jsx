import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getGroup } from '../api/groups';

export default function GroupAside() {
  const { groupId } = useParams();
  const { isLoading, isError, data } = useQuery({
    queryKey: ['groups', groupId],
    queryFn: () => getGroup(groupId),
  });

  if (isLoading) return 'Loading...';
  if (isError) return 'Error!';

  const group = data.data.group;

  return (
    <aside className="flex flex-col gap-4">
      <div className="rounded-2xl bg-base-100 p-4 shadow">
        <h3 className="text-lg font-bold">Title</h3>
        <p className="mt-4 text-base-content/70">{group.sidebar}</p>
      </div>
    </aside>
  );
}
