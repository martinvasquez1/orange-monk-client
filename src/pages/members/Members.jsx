import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getGroup } from '../../api/groups';

import MembersTable from './MembersTable';
import JoinRequestsTable from './JoinRequestsTable';

export default function Members() {
  const { groupId } = useParams();
  const { isLoading, isError, data } = useQuery({
    queryKey: ['groups', groupId],
    queryFn: () => getGroup(groupId),
  });

  if (isLoading) return 'Loading...';
  if (isError) return 'Error!';

  const isPublic = !data.data.group.private;

  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-2xl bg-base-100 p-4 px-6 shadow">
        <h2 className="text-xl font-bold">Members</h2>
        <MembersTable />
      </div>
      {isPublic && (
        <div className="rounded-2xl bg-base-100 p-4 px-6 shadow">
          <h2 className="text-xl font-bold">Join Requests</h2>
          <JoinRequestsTable />
        </div>
      )}
    </div>
  );
}
